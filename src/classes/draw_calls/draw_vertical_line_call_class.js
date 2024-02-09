import DrawCall from './draw_call_class';

class DrawVerticalLineCall extends DrawCall {
    #height = null;

    static drawVerticalLineAt(data, colorBuffer, x, y, height) {
        for (let currentY = y; currentY <= height; currentY++) {
            drawText(data, colorBuffer, x, currentY);
        }
    }

    draw() {
        DrawVerticalLineCall.drawVerticalLineAt(this.data, this.colorBuffer, this.x, this.y. this.#height);
    };

    constructor(data, colorBuffer, x, y, height) {
        super(data, colorBuffer, x, y);

        this.#height = height;
    }
}

export default DrawVerticalLineCall;