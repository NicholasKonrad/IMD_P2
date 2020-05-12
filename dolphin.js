/* jslint esversion: 6 */

import global from "./global.js";

export default class Dolphin {
    constructor(img_up, img_down) {
        this.img_up = img_up;
        this.img_down = img_down;
        this.xpos = random() * global.vw * 100;
        this.ypos = random() * ((global.vh * 60) - (global.vh * 20)) + (global.vh * 20);
        this.direction = 1;
        this.iterationCounter = 0;
        this.width = global.vw * 18;
        this.height = global.vh * 12;
    }
    
    main() {
        this.xpos += this.direction * 4;
        if (this.xpos < -150 || window.innerWidth < this.xpos) this.direction *= -1;
        this.iterationCounter++;
        if (this.iterationCounter == 10) {
            this.imgSwap = !this.imgSwap; 
            this.iterationCounter = 0;
        }
        if (this.imgSwap == false) {
            image(this.img_down, this.xpos, this.ypos, this.width, this.height);
        } else {
            image(this.img_up, this.xpos, this.ypos, this.width, this.height);
        }
    }
}