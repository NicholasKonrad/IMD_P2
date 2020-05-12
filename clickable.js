/* jslint esversion: 6 */

import global from "./global.js";
import Entity from "./entity.js";

export default class Clickable extends Entity {
    constructor({img,x,y,w,h,cc=0}) {
        super(img,x,y,w,h);
        if ((w || h) == (undefined || null)) console.log("Width Height = " + w, h + " for " + this.constructor.name);
        this.once = false;
        this.clickCode = cc;
    }

    main() {
        this.display();
        this.eventListener();
    }

    display() {
        if (this.image != undefined) 
            image(this.image, this.xpos, this.ypos, this.width, this.height);
        else {
            fill(20,200,140);
            noStroke();
            rect(this.xpos, this.ypos, this.width, this.height, 20);
        }
    }

    cursorInRange(posX, posY, rangeX, rangeY) {
        if (posX <= mouseX && mouseX <= posX + rangeX &&
            posY <= mouseY && mouseY <= posY + rangeY)
            return true;
    }

    isClicked() {
        if (mouseIsPressed && this.cursorInRange(this.xpos, this.ypos, this.width, this.height) && this.clickedOnce == false) {
            this.clickedOnce = true;
            return true;
        }
        if (!mouseIsPressed) this.clickedOnce = false;
    }

    eventListener() {
        if (mouseIsPressed && this.cursorInRange(this.xpos, this.ypos, this.width, this.height) && this.once == false) {
            if (typeof this.clickCode == 'string') {
                global.screenChanged = true;
                global.scene = this.clickCode;
                this.once = true;
            } else console.log("Clcik Code not a string");
        } if (!mouseIsPressed) this.once = false;
    }
}