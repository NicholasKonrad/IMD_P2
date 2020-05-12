/* jslint esversion: 6 */

import globa from "./global.js";
import Item from "./item.js";

export default class Home {
    constructor({img_env, img_phone, img_car, img_plane, img_train}) {
        this.img_env = img_env;
        this.img_phone = img_phone;
        this.img_car = new Item({img: img_car,});
        // this.img_plane = ;
        // this.img_train = ;
    }

    main() {
        image(this.img_env, 0, 0, window.innerWidth, window.innerHeight);
    }
}