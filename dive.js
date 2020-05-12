/* jslint esversion: 6 */

import global from "./global.js";
import Fish from "./fish.js";
import Dolphin from "./dolphin.js";

export default class Dive {
    constructor({img_env, img_dolphin_one, img_dolphin_two, img_fish_one, img_fish_two, img_fish_three}) {
        this.img_env = img_env;
        this.img_fish_red = img_fish_one;
        this.img_fish_green = img_fish_two;
        this.img_fish_blue = img_fish_three;
        this.fishArray = [];
        for (let g = 0; g < (20 - global.score); g++) this.fishArray.push(new Fish(img_fish_one, img_fish_two, img_fish_three));
        this.Dolphin = new Dolphin(img_dolphin_one, img_dolphin_two);
    }

    main() {
        background(130, 195, 245);
        image(this.img_env, 0, 0, window.innerWidth, window.innerHeight);
        for (let b = 0; b < this.fishArray.length; b++) this.fishArray[b].main();
        this.Dolphin.main();
    }
}