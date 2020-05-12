/* jslint esversion: 6 */

export default class Sea {
    constructor(img_sea) {
        this.img_sea = img_sea;
        this.xpos = 0;
    }

    main() {
        image(this.img_sea, this.xpos, 0, window.innerWidth, window.innerHeight);
        image(this.img_sea, this.xpos - window.innerWidth, 0, window.innerWidth, window.innerHeight);
        this.xpos += 2;
        if (this.xpos > window.innerWidth) this.xpos = 0;
    }
}