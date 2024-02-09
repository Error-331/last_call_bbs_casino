import Sprite from '../drawable/sprite_class';
import { isNullOrEmpty } from './../../utils/common_utils';

const SPRITE_DRAWABLE_TYPE = 'SPRITE_DRAWABLE_TYPE';
const DRAWABLE_TYPE = 'DRAWABLE_TYPE';

class Drawer {
    static #instance;

    #buffer = [];
    #t = 0;

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

        this.#buffer.push({
            type: this.#extractDrawableClassType(drawable),
            instance: drawable,
            drawInstructions: null,
        });
    }

    addDrawableBunch(drawables) {
        if (isNullOrEmpty(drawables)) {
            throw new Error('Drawables list is empty, cannot add drawables to buffer');
        }

        for (const drawableObj of drawables) {
            this.#addDrawableToBuffer(drawableObj);
        }
    }

    addDrawable(drawable) {
        this.#addDrawableToBuffer(drawable);
    }

    draw() {
        for (const drawable of this.#buffer) {
            if (drawable.drawInstructions !== drawable.instance.drawInstructions) {
                drawable.drawInstructions = drawable.instance.drawInstructions;
                drawable.instance.draw();

                drawText(this.#t, 10, 0, 0);
                this.#t += 1;
            }
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
