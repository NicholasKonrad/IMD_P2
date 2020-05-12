/* jslint esversion: 6 */

import global from "./global.js";

export default class Fish {
    constructor(img_red, img_green, img_blue) {
        this.img;

        let r = random();
        if (r < 0.33) this.img = img_red;
        else if (r < 0.66) this.img = img_green;
        else this.img = img_blue;

        this.xpos = random() * global.vw * 100;
        this.ypos = random() * global.vh * 100;
        this.depth = random() * global.vw * (5 - 2) + 2; 

        if (r > 0.5) this.direction = 1;
        else this.direction = -1;

        this.randomFactor = random() * (2.5 - 1) + 1;
    }

    main() {
        image(this.img, this.xpos, this.ypos, this.depth * this.randomFactor, this.depth);
        this.swim();
    }

    swim() {
        this.xpos += 2 * (this.depth / 15) * this.direction;
        if (this.xpos < -150 || this.xpos > window.innerWidth) this.direction *= -1;
        this.width = Math.abs(this.width) * this.direction;
    }
}