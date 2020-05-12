/* jslint esversion: 6 */

import Entity from "./entity.js";

export default class AnimatedObject extends Entity {
    constructor({img,x,y,w,h,a}) {
        super(img,x,y,w,h);
        this.animationStyle = a;
        this.offset = 0;
        this.sensibility = random() * (1 - 0.4) + 0.4;
        this.animProgress = 0;
        this.animCheck = false;

        this.pivotX = this.xpos;
        this.pivotY = this.ypos;
        this.xpos = 0;
        this.ypos = 0;

        if (a == 'palmleaf') {
            if (this.width < 0) this.offset = random() * (-0.3 + 0.05) + 0.05;
            if (this.width > 0) this.offset = random() * (0.3 - 0.05) + 0.05;
        }
    }
    
    main() {
        push();
        translate(this.pivotX, this.pivotY);
        this.animate();
        super.display();
        pop();
    }

    animate() {
        switch (this.animationStyle) {
            case 'palmleaf':
                this.palmleafRotation();
                break;
            case 'move':
                this.animationMove();
                break;
            default: 
                console.log("wrong animation parameter for " + this.constructor.name + " : " + this.animationStyle);
                break;
        }
    }

    palmleafRotation() {
        if ((this.animProgress - this.offset) < 0) this.animCheck = false;
        if (this.animProgress > 0.45) this.animCheck = true;

        if (this.animCheck == false) this.animProgress += 0.005 * this.sensibility;
        if (this.animCheck == true) this.animProgress -= 0.005 * this.sensibility;

        if (this.width < 0) rotate(-0.6);
        rotate(this.animProgress + this.offset);
    }

    animationMove() {

    }
}