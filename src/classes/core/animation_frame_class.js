class AnimationFrame {
    #speed = null;
    #threshold = null;

    constructor(options = {}) {
        this.#speed = options.speed;
        this.#threshold = options.speed;
    }

    draw(frameCallback, afterFrameDrawCallback) {
        if (this.#threshold <= 0) {
            this.#threshold = this.#speed;

            afterFrameDrawCallback();
            frameCallback();
        } else {
            this.#threshold = this.#threshold - 1;
            frameCallback();
        }
    }
}

export default AnimationFrame;