/* jslint esversion: 6 */

import global from "./global.js";

export default class Boat {
    constructor({img, xpos=45, ypos=45, degree=-45}) {
        this.img = img;
        this.xpos = xpos * global.vw;
        this.ypos = ypos * global.vh;
        this.length = 15 * global.vh;
        this.width = 6 * global.vw;
        this.speed = 4;
        this.acc = 0.5;
        this.degree = degree;
        this.vecx = 0;
        this.vecy = 0;
    }

    main() {
        this.update();
        push();
        translate(this.xpos, this.ypos);
        rotate(((this.degree * Math.PI) / 180) * 10);
        image(this.img, 0, 0, this.length, this.width);
        pop();
    }

    update() {
        if (mouseX < window.innerWidth / 2 && mouseIsPressed) this.turnleft();
        if (window.innerWidth / 2 < mouseX && mouseIsPressed) this.turnright();

        this.xpos += this.vecx;
        this.ypos += this.vecy;
        
        if (Math.abs(this.degree) == 360) this.degree = 0;
        
        this.vecx = Math.cos(((this.degree * Math.PI) / 180) * 10) * this.speed;
        this.vecy = Math.sin(((this.degree * Math.PI) / 180) * 10) * this.speed;
    }

    turnleft() {
        this.degree -= 0.6;
    }

    turnright() {
        this.degree += 0.6;
    }

    decelerate() {
        if (this.speed - this.acc >= 0) {
            this.speed -= this.acc;
        }
    }
}