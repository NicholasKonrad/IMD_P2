/* jslint esversion: 6 */

export default class LitterIsland {
    constructor(img) {
        this.img = img;
        this.xpos;
        this.ypos;
        this.scale;
    }

    main() {
        image(this.img, this.xpos, this.ypos, this.width, this.height);
    }
}