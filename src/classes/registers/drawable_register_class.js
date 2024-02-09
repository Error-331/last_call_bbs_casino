class DrawableRegister {
    #drawables = [];

    clear() {
        this.#drawables = [];
    }

    add(drawable) {
        this.#drawables.push(drawable);
    }

    draw() {
        for (const drawable of this.#drawables) {
            if (!drawable.isDrawn) {
                drawable.draw();
            }
        }
    }
}

export default DrawableRegister;