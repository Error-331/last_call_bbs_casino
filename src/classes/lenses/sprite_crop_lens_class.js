import isNullOrEmpty from './../../utils/common_utils';

class SpriteCropLens {
    #x1 = null;
    #x2 = null;

    #y1 = null;
    #y2 = null;

    constructor(options = {}) {
        const {
            x1 = 0,
            x2 = 0,

            y1 = 0,
            y2 = 0
        } = options;

        this.#x1 = x1;
        this.#x2 = x2;

        this.#y1 = y1;
        this.#y2 = y2;
    }

    apply(drawable, drawInstruction) {
        if (isNullOrEmpty(drawInstruction)) {
            return null;
        }

        const [
            spriteRowData,
            colorBuffer,
            rowX1,
            rowY,
            width,
        ] = drawInstruction;

        const x1 = drawable.x + this.#x1;
        const x2 = drawable.x + this.#x2;

        const y1 = drawable.y + this.#y1;
        const y2 = drawable.y + this.#y2;

        const rowX2 = rowX1 + width;

        if (rowY >= y1 && rowY <= y2) {
            if (rowX2 < x1 || rowX1 > x2) {
                return null;
            } else if (rowX1 === x1 && rowX2 === x2) {
                return drawInstruction
            } else {
                const newSpriteRowData = spriteRowData.substring(this.#x1, this.#x2);
                return [newSpriteRowData, colorBuffer, rowX1 + this.#x1, rowY, width];
            }
        } else {
            return null;
        }
    }

    get x1() {
        return this.#x1;
    }

    get x2() {
        return this.#x2;
    }

    get y1() {
        return this.#y1;
    }

    get y2() {
        return this.#y2;
    }

    setCropArea(x1, x2, y1, y2) {
        this.#x1 = x1;
        this.#x2 = x2;

        this.#y1 = y1;
        this.#y2 = y2;
    }
}

export default SpriteCropLens;