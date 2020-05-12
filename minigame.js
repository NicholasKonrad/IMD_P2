/* jslint esversion: 6 */

import global from "./global.js";
import Boat from "./boat.js";

export default class Minigame {
    constructor({img_boat, img_waste}) {
        this.img_waste = img_waste;
        this.Player = new Boat({img: img_boat});
        this.litterArray = [];
        // for (let f = 0; f < global.score; f++) this.litterArray.push(new LitterIsland(img_waste));
    }
    
    main() {
        this.Player.main();
    }
}