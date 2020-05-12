/* jslint esversion: 6 */

// import this from "./global.js";
import AnimatedObject from "./animatedObject.js";
import Entity from "./entity.js";

export default class Palm {
    constructor({img_leaf, img_stem, x,y,w=1,h=1,s=1}) {
        this.leafIMG = img_leaf;
        this.stemIMG = img_stem;
        this.xpos = x * (window.innerWidth / 100);
        this.ypos = y * (window.innerHeight / 100);
        this.scale = s;
        if ((w && h) == 1) {
            this.randomDimensions = floor(Math.random() * (18 - 13) + 13);
            this.width = this.randomDimensions * (window.innerWidth / 100) * this.scale;
            this.height = this.randomDimensions * (window.innerHeight / 100) * 4 * this.scale;
        }
        else {
            this.width = w * (window.innerWidth / 100);
            this.height = h * (window.innerHeight / 100);
        }
        this.leavesArray = [];
        for (let i = 0; i < 6; i++) {
            if (i % 2 == 0) {
                this.leavesArray.push(new AnimatedObject({img: this.leafIMG, x:x+0.4 * this.randomDimensions * this.scale, y:y-0.05 * this.randomDimensions-0.15 * this.randomDimensions, w:this.width / (window.innerWidth / 100), h: 0.1 * (this.height / (window.innerHeight / 100)), a:'palmleaf'}));
                continue;
            }
            this.leavesArray.push(new AnimatedObject({img: this.leafIMG, x:x+0.45 * this.randomDimensions * this.scale, y:y-0.05 * this.randomDimensions, w:-this.width / (window.innerWidth / 100), h: 0.1 * (this.height / (window.innerHeight / 100)), a:'palmleaf'}));
        }
        this.amountOfLeaves = floor(Math.random() * (9 - 6) + 6);
        if (this.amountOfLeaves > 6) {
            this.leavesArray.push(new AnimatedObject({img: this.leafIMG, x:x+0.45 * this.randomDimensions * this.scale, y:y-0.05 * this.randomDimensions-0.15 * this.randomDimensions, w:this.width / (window.innerWidth / 100), h: 0.1 * (this.height / (window.innerHeight / 100)), a:'palmleaf'}));
            if (this.amountOfLeaves > 7) {
                this.leavesArray.push(new AnimatedObject({img: this.leafIMG, x:x+0.45 * this.randomDimensions * this.scale, y:y-0.05 * this.randomDimensions, w:-this.width / (window.innerWidth / 100), h: 0.1 * (this.height / (window.innerHeight / 100)), a:'palmleaf'}));
                if (this.amountOfLeaves > 8) {
                    this.leavesArray.push(new AnimatedObject({img: this.leafIMG, x:x+0.45 * this.randomDimensions * this.scale, y:y-0.05 * this.randomDimensions-0.15 * this.randomDimensions, w:this.width / (window.innerWidth / 100), h: 0.1 * (this.height / (window.innerHeight / 100)), a:'palmleaf'}));
                }
            }
        }
        this.once = false;
    }

    main() {
        if (this.once == false) {
            for (let n = 0; n < 30; n++) {
                for (let v=0; v < this.leavesArray.length; v++) {
                    this.leavesArray[v].main();        //Because it looks ugly when animtion starts with zero iterations
                }
            }
            this.once = true;
        }
        image(this.stemIMG, this.xpos - 0.8, this.ypos, this.width / 1.5, this.height);
        for (let v=0; v < this.leavesArray.length; v++) {
            this.leavesArray[v].main();
        }
    }
}