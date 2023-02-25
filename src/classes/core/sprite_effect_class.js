class SpriteEffectClass {
    #x1 = null;
    #x2 = null;

    #y1 = null;
    #y2 = null;

    isDrawInstructionInYBounds(drawable, drawInstruction) {
        const [
            ,
            ,
            ,
            rowY,
        ] = drawInstruction;

        const y1 = drawable.y + this.y1;
        const y2 = drawable.y + this.y2;

        return rowY >= y1 && rowY <= y2
    }

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

    setEffectArea(x1, x2, y1, y2) {
        this.#x1 = x1;
        this.#x2 = x2;

        this.#y1 = y1;
        this.#y2 = y2;
    }
}

export default SpriteEffectClass;