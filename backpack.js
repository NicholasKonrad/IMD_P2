/* jslint esversion: 6 */

import global from "./global.js";

export default class Backpack{
    constructor(img) {
        this.image = img;
        this.xpos = global.backpack_xpos;
        this.ypos = global.backpack_ypos;
        this.width = global.backpack_width;
        this.height = global.backpack_height;
        this.once = false;
        this.invWidth = 0;
        this.INVMAXWIDTH = global.vw * 20;
        this.toggleAnimActive = false;
        this.focusAnimationActive = false;
        this.focusScale = 1;
        this.growDirection = 1;
        this.invPreLength = 0;
    }

    main() {
        noStroke();
        fill(80,180, 200);
        rect(this.xpos + this.width * 0.01, this.ypos + global.vh * 10, -this.invWidth, this.height / 3 * 0.85); 
        image(this.image, this.xpos, this.ypos, this.width, this.height);
        this.animationListener();
        this.switchModeEventListener();
        this.toggleDisplayEventListener();

        //Display content when open
        if (global.invOpen && global.inventory.length > 0) {
            for (let k = 0; k < global.inventory.length; k++) {
                global.inventory[0].main();
            }
        }
    }

    animationListener() {
        //Automates Animation when new item is pushed to inventory
        if (global.inventory.length == 0 ) return;
        if (this.invPreLength < global.inventory.length) {
            this.invPreLength = global.inventory.length;
            global.invAnimToggle = true;
        } 
    }
    
    switchModeEventListener() {
        if (global.carryingItem == false && mouseIsPressed && this.once == false &&
            this.xpos <= mouseX && mouseX <= this.xpos + this.width && 
            this.ypos <= mouseY && mouseY <= this.ypos + this.height) {
                this.once = true;
                this.toggleAnimActive = true;
        } if (!mouseIsPressed) {
                this.once = false;
        }
    }
        
    toggleDisplayEventListener() {
        if (this.toggleAnimActive || global.invAnimToggle == true) {
            this.invWidth += 3 * global.vw * this.growDirection;
            if (this.invWidth < 0 || this.INVMAXWIDTH < this.invWidth) {
                //Dont know warum es nicht einfach mit this.invWidth < 0 funzt
                this.growDirection *= -1;
                global.invOpen = !global.invOpen;
                this.toggleAnimActive = false;
                global.invAnimToggle = false;
            } 
        }
    }
}