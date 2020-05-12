/* jslint esversion: 6 */

import global from "./global.js";
import Palm from "./palm.js";
import Sea from "./sea.js";

export default class Grill {
    constructor({img_env, img_stem, img_leaf, img_cloud, img_sea, img_grill, img_bench, img_lights}) {
        this.img_env = img_env;
        this.img_cloud = img_cloud;
        this.img_grill = img_grill;
        this.img_bench = img_bench;
        this.img_lights = img_lights;
        this.Sea = new Sea(img_sea);
        this.palmArray = [];
        this.palmArray.push(new Palm({img_stem: img_stem, img_leaf: img_leaf, x:20, y:5, s:0.75}));
        this.palmArray.push(new Palm({img_stem: img_stem, img_leaf: img_leaf, x:58, y:5, s:0.75}));
        this.palmArray.push(new Palm({img_stem: img_stem, img_leaf: img_leaf, x:92, y:5}));
    }

    main() {
        background(5,100,150);
        this.Sea.main();
        image(this.img_env, 0,0, window.innerWidth, window.innerHeight);
        image(this.img_lights, 
            this.palmArray[0].xpos + this.palmArray[0].width / 2, 
            this.palmArray[0].ypos + this.palmArray[0].height / 2,
            (this.palmArray[1].xpos + this.palmArray[1].width / 2) - (this.palmArray[0].xpos + this.palmArray[0].width / 2),
            global.vh * 12);
        for (let i = 0; i < this.palmArray.length; i++) this.palmArray[i].main();
        image(this.img_bench, global.vw * 15, global.vh * 52, global.vw * 20, global.vh * 20);
        console.log(global.vw* 15 > window.innerWidth);
        image(this.img_bench, global.vw * 46, global.vh * 62, global.vw * 20, global.vh * 20);
        image(this.img_grill, global.vw * 76, global.vh * 55, global.vw * 8, global.vh * 20);
    }
}