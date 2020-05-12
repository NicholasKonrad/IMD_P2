/* jslint esversion: 6 */

import global from "./global.js";
import Palm from "./palm.js";
import Sea from "./sea.js";
import Clickable from "./clickable.js";
import Item from "./item.js";
import Wastebin from "./wastebin.js";

export default class Beach {
    constructor({img_trash, 
            img_bottle, 
            img_can, 
            img_random, 
            img_bag, 
            img_ball, 
            img_env, 
            img_store, 
            img_stem, 
            img_leaf, 
            img_sea, 
            img_cloud, 
            img_boy, 
            img_girl}) {
        this.img_env = img_env;
        this.img_cloud= img_cloud;
        this.img_boy = img_boy;
        this.img_girl = img_girl;
        this.Sea = new Sea(img_sea);
        this.palmArray = [];
        this.palmArray.push(new Palm({img_stem: img_stem, img_leaf: img_leaf, x:0, y:50}));
        this.palmArray.push(new Palm({img_stem: img_stem, img_leaf: img_leaf, x:60, y:6.5}));
        this.palmArray.push(new Palm({img_stem: img_stem, img_leaf: img_leaf, x:90, y:20}));
        this.Store = new Clickable({img: img_store, x:77, y:14, w:24, h:40, cc:3});
        global.litterArray.push(new Item({img: img_bottle, x:20, y:20, w:1, h:2.5, cc:4}));
        global.litterArray.push(new Item({img: img_bottle, x:30, y:20, w:1, h:2.5, cc:4}));
        global.litterArray.push(new Item({img: img_bottle, x:40, y:20, w:1, h:2.5, cc:4}));
        global.litterArray.push(new Item({img: img_bottle, x:50, y:20, w:1, h:2.5, cc:4}));
        this.Wastebin = new Wastebin({img: img_trash, litterArray: this.litterArray, x:15, y:82});
        this.img_ball = img_ball;
        this.ballX = 0;
        this.ballY = 0;
        this.ballscale = 5 + global.vw;
    }

    main() {
        background(154, 202, 238);
        this.Sea.main();
        image(this.img_env, 0, 0, window.innerWidth, window.innerHeight);
        this.Store.main();
        for (let i = 0; i < this.palmArray.length; i++) this.palmArray[i].main();

        if (global.litterArray.length > 0) 
            for (let i = 0; i < global.litterArray.length; i++) 
                global.litterArray[i].main();

        this.Wastebin.main();

        if (this.Store.isClicked() && global.mapOpen == false && global.carryingItem == false) {
            if (global.inventory.length < 3) {
                global.inventory.push(new Item({img: this.img_ball, instantPush: true}));
                global.score += 4;
            } else console.log("youre full");
        }
    }
}