/* jslint esversion: 6 */

import global from "./global.js";
import Palm from "./palm.js";
import Sea from "./sea.js";
import Clickable from "./clickable.js";

export default class Startscreen {
    constructor({font_averia, font_heebo, img_sand, img_sea, img_stem, img_leaf, img_cloud, img_ball}) {
        this.font_averia = font_averia;
        this.font_heebo = font_heebo;
        this.img_sand = img_sand;
        this.img_stem = img_stem;
        this.img_leaf = img_leaf;
        this.img_cloud = img_cloud;
        this.img_ball = img_ball;
        this.Sea = new Sea(img_sea);
        this.palmArray = [];
        this.palmArray.push(new Palm({img_stem: img_stem, img_leaf: img_leaf, x:-2, y:25}));
        this.palmArray.push(new Palm({img_stem: img_stem, img_leaf: img_leaf, x:30, y:40}));
        this.palmArray.push(new Palm({img_stem: img_stem, img_leaf: img_leaf, x:92, y:5}));
        this.Start = new Clickable({x:65, y:50, w:10, h:10, cc:'grill'});
    }

    main() {
        background(154, 202, 238);
        this.Sea.main();
        image(this.img_sand, 0,0, window.innerWidth, window.innerHeight);
        image(this.img_ball, global.vw * 20, global.vh * 60, global.vw * 5, global.vw * 5);
        for (let i = 0; i < this.palmArray.length; i++) this.palmArray[i].main();
        fill(255,255,255);
        textFont(this.font_averia, 5 * global.vw);
        text("Palmtrees made of Plastic", global.vw * 30, global.vh * 45);
        this.Start.main();
        fill(255,255,255);
        textFont(this.font_heebo, 35);
        text("Start", this.Start.xpos + 3 * global.vw, this.Start.ypos + 6 * global.vh);
    }
}