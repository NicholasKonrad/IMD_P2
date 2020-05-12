/* jslint esversion: 6 */

import Clickable from "./clickable.js";
import global from "./global.js";

export default class Item extends Clickable {
    constructor({img,
            x= 80,
            y= 80,
            w=global.vw * 1,
            h=global.vh * 2,
            cc,
            placement='environment',
            instantPush=false}) {
            super({img,x,y,w,h,cc});
        this.once = false;
        this.placement = placement;
        // this.ID = global.itemIDcount;
        this.instantPush = instantPush;
        if (instantPush && global.inventory.length < 3) {
            //set new values for item to fit into inventory before pushing
            this.xpos = global.backpack_xpos - (global.inventory.length + 1) * 5.5 * global.vw;
            this.ypos = global.backpack_ypos + global.vh * 11;
            this.width = 3.5 * global.vw;
            this.height = 3.5 * global.vw;
        }
        // global.itemIDcount++;
    }

    main() {
        super.display();
        this.eventListener();
    }

    eventListener() {
        if (this.cursorOnItem() && mouseIsPressed && global.carryingItem == false) {
                this.interactive = true;
                global.carryingItem = true;
        }
        if (this.interactive) {
                if (this.once == false) {
                    this.makeBigger();
                }
                this.xpos = mouseX - (this.width / 2);
                this.ypos = mouseY - (this.height / 2);
        }
        if (!mouseIsPressed) {
            //These two if statements cant be put in one line or the following will be executed immedeately
            if (this.once == true) {
                if (this.interactive) {
                    this.makeSmaller();
                }

                if (this.posIsInsideBackpack()) {
                        this.pushItemToInventory();
                } else {
                    this.placement = 'environment';
                    global.inventory.splice(global.inventory.indexOf(this));
                    global.litterArray.push(this);
                }
            }
        }
    }

    cursorOnItem() {
        if (this.xpos <= mouseX && mouseX <= this.xpos + this.width &&
            this.ypos <= mouseY && mouseY <= this.ypos + this.height)
                return true;
    }

    posIsInsideBackpack() {
        if (global.backpack_xpos <= this.xpos && this.xpos <= global.backpack_xpos + global.backpack_width,
            global.backpack_ypos <= this.ypos && this.ypos <= global.backpack_ypos + global.backpack_height)
                return true;
    }

    makeBigger() {
        this.width *= 2;
        this.height *= 2;
        this.once = true;
    }

    makeSmaller() {
        this.width /= 2;
        this.height /= 2;
        this.xpos += this.width / 2;
        this.ypos += this.height / 2;
        this.once = false;
        this.interactive = false;
        global.carryingItem = false;
    }

    pushPreparation() {
        //set new values for item to fit into inventory before pushing just like in constructor
        this.xpos = global.backpack_xpos - (global.inventory.length + 1) * 5 * global.vw;
        this.ypos = global.backpack_ypos + global.vh * 11;
        this.width = 3.5 * global.vw;
        this.height = 3.5 * global.vw;
    }

    pushItemToInventory() {
        //adding the dragged item to the inventory while prohibiting duplicate items
        if (global.inventory.indexOf(this) >= 0) return;
        else {
            if (global.inventory.length < 3) {
                if (this.placement == 'environment') global.score -= this.clickCode;
                if (this.placement == 'stored') global.score += this.clickCode;
                this.placement = 'inventory';
                this.pushPreparation();
                global.inventory.push(this);
            } else console.log("you cant carry any more items");
            if (global.invOpen == false) global.invAnimToggle = true;
        }
    }
}