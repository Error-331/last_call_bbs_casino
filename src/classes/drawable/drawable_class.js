import { createContinuousString } from './../../utils/string_utils';

class Drawable {
    #boxCharacters = [];

    #x = 0;
    #y = 0;

    #currentX = 0;
    #currentY = 0;

    #drawCalls = [];

    #isDrawn = false;

    prepareDrawCalls() {
        this.invalidateDrawing();
    }

    clearDrawCalls() {
        this.#drawCalls = [];
    }

    addDrawCall(drawCall) {
        this.#drawCalls.push(drawCall);
    }

    addDrawCalls(drawCalls) {
        this.#drawCalls = this.#drawCalls.concat(drawCalls);
    }

    draw() {
        for (const drawCall of this.#drawCalls) {
            drawCall.draw();
        }

        this.finishDrawing();
    }

    reset() {
        this.resetTo(this.#x, this.#y);
    }

    resetTo(x, y) {
        this.#x = x;
        this.#y = y;

        this.#currentX = this.#x;
        this.#currentY = this.#y;
    }

    finishDrawing() {
        this.#isDrawn = true;
    }

    invalidateDrawing() {
        this.#isDrawn = false;
    }

    get boxCharacters() {
        return this.#boxCharacters;
    }

    get x() {
        return this.#x;
    }

    get y() {
        return this.#y;
    }

    get currentX() {
        return this.#currentX;
    }

    get currentY() {
        return this.#currentY;
    }

    get drawCalls() {
        return this.#drawCalls;
    }

    get isDrawn() {
        return this.#isDrawn;
    }

    set boxCharacters(newBoxCharacters) {
        this.#boxCharacters = newBoxCharacters;
    }

    constructor(x = 0, y = 0) {
        this.resetTo(x, y);
    }
}

export default Drawable;
