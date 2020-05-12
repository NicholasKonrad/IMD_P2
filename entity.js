/* jslint esversion: 6 */

import global from "./global.js";

export default class Entity {
    constructor(img, x, y, w=5, h=5) {
        this.xpos = x * global.vw;
        this.ypos = y * global.vh;
        this.width = w * global.vw;
        this.height = h * global.vh;
        this.image = img;
    }

    display() {
        image(this.image, this.xpos, this.ypos, this.width, this.height);
    }
}