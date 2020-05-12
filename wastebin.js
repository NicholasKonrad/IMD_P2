/* jslint esversion: 6 */

import global from "./global.js";

export default class Wastebin {
    constructor({img, x, y, w=6, h=14}) {
        this.img = img;
        this.xpos = x * global.vw;
        this.ypos = y * global.vh;
        this.width = w * global.vw;
        this.height = h * global.vh;
    }

    main() {
        image(this.img, this.xpos, this.ypos, this.width, this.height);
        this.eventListener();
    }

    eventListener() {
        for (let f = 0; f < global.litterArray.length; f++) {
            if (this.xpos <= global.litterArray[f].xpos && global.litterArray[f].xpos <= this.xpos + this.width &&
                this.ypos <= global.litterArray[f].ypos && global.litterArray[f].ypos <= this.ypos + this.height && mouseIsPressed == false) {
                global.score -= global.litterArray[f].clickCode;
                global.litterArray.splice(f);
            }
        }
    }
}