import Sprite from './sprite_class';
import { isNullOrEmpty } from './../../utils/common_utils';

const SPRITE_DRAWABLE_TYPE = 'SPRITE_DRAWABLE_TYPE';
const DRAWABLE_TYPE = 'DRAWABLE_TYPE';

class Drawer {
    static #instance;

    #shouldRedraw = true;
    #buffer = [];

    #extractDrawableClassType(drawableObj) {
        if (drawableObj instanceof Sprite) {
            return SPRITE_DRAWABLE_TYPE;
        } else {
            return DRAWABLE_TYPE;
        }
    }

    #addDrawableToBuffer(drawable) {
        if (isNullOrEmpty(drawable)) {
            throw new Error('Drawable is null of empty, cannot add drawable to buffer');
        }

        return this.#buffer.push({
            type: this. #extractDrawableClassType(drawable),
            instance: drawable,
        }) - 1;
    }

    addDrawableBunch(drawables) {
        if (isNullOrEmpty(drawables)) {
            throw new Error('Drawables list is empty, cannot add drawables to buffer');
        }

        for (const drawableObj of drawables) {
            this.#addDrawableToBuffer(drawableObj);
        }

        this.#shouldRedraw = true;
    }

    addDrawable(drawable) {
        this.#addDrawableToBuffer(drawable);
        this.#shouldRedraw = true;
    }

    draw() {
        if (!this.#shouldRedraw) {
            return;
        }

        for (const drawable of this.#buffer) {
            drawable.draw();
            this.#shouldRedraw = false;
        }
    }

    constructor(){
        if(Drawer.#instance){
            return Drawer.#instance;
        }

        Drawer.#instance = this;
    }
}

export default Drawer;