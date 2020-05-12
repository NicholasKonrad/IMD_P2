/* jslint esversion: 6 */

import score from "./global.js";
import palm from "./palm.js";

export default class Scene {
    constructor(s,
                img01,
                img02,
        ) {
        this.seed = s;
        this.elements = [];
        this.img01 = img01;
        this.img02 = img02;
    }

    main() {
        this.mapEventListener();

        //MINIGAME
        if (this.seed == 0) {
            window.location.assign("./minigame.html");
        }

        //STARTSCREEN
        if (this.seed == 1) {
        }

        //BEACH
        if (this.seed == 2) {  
            this.elements.push(new Palm({img_leaf: this.img01, img_stem: this.img02, x: 90, y: 35}));
        }
    }

    mapEventListener() {

    }
}