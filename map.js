/* jslint esversion: 6 */

import global from "./global.js";

export default class Map {
    constructor(img_folded, img_open) {
        this.img_folded = img_folded;
        this.img_open = img_open;
        this.width = global.vw * 35;
        this.MAXWIDTH = global.vw * 90;
        this.height = global.vh * 12;
        this.xpos = global.vw * 50 - 0.5 * this.width;
        this.ypos = global.vh * 100 - this.height;
        this.open = false;
        this.once = false;
        this.toggleAnimation = false;
        this.growDirection = -1;
        this.animationProgress = 0;
        this.animCheckpointReached = false;
        this.stepSize = 8.24;
    }

    main() {
        this.switchopenListener();
        if (this.open == false) {
            image(this.img_folded, this.xpos, this.ypos, this.width, this.height);
            global.mapOpen = false;
        }
        if (this.open == true) {
            image(this.img_open, this.xpos, this.ypos, this.width, this.height);
            global.mapOpen = true;
        }
    }

    switchopenListener() {
        //If map is Clicked play Animation once
        if (mouseIsPressed && this.once == false &&
            this.xpos <= mouseX && mouseX <= this.xpos + this.width && 
            this.ypos <= mouseY && mouseY <= this.ypos + this.height) {
                this.toggleAnimation = true;
                this.once = true;
        } if (!mouseIsPressed) {
                this.once = false;
        }

        //animation
        if (this.toggleAnimation) {
            if (this.animCheckpointReached == false && this.width < 25 * global.vw) {
                if (this.open) {
                    this.width = 35 * global.vw;
                    this.height = 12 * global.vh;
                    this.xpos = 50 * global.vw - 0.5 * this.width;
                    this.ypos = global.vh * 100 - this.height;
                    this.toggleAnimation = false;
                    this.open = !this.open;
                    return;
                }
                this.open = !this.open;
                this.growDirection = 1;
                this.animCheckpointReached = true;
                console.log("#1")
            } 
            if (this.animCheckpointReached &&  this.MAXWIDTH < this.width) {
                this.growDirection = -1;
                this.animCheckpointReached = false;
                this.toggleAnimation = false;
                console.log("#2");
            }
            this.width += this.stepSize * global.vw * this.growDirection;
            this.height += (this.stepSize * 1.5 ) * global.vh * this.growDirection;
            this.xpos += (this.stepSize / 2) * global.vw * (-this.growDirection);
            this.ypos += (this.stepSize * 1.5 ) * global.vh * (-this.growDirection);
            console.log(this.animCheckpointReached, this.growDirection)
        }
    }
}