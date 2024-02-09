import DrawCall from './draw_call_class';
import DrawVerticalLineCall from './draw_vertical_line_call_class';

class DrawVerticalLineCall extends DrawCall {
    #width = null;
    #height = null;

    draw() {
        if (this.data === '') {
            drawBox(this.colorBuffer, this.x, this.y, this.#width, this.#height);
        } else {
            drawText(this.data[0], this.colorBuffer, this.x, this.y);
            drawText(createContinuousString(this.data[1], this.#width - 2), this.colorBuffer, this.x + 1, this.y);
            drawText(this.data[2], this.colorBuffer, this.x + (this.#width - 1), this.y);

            drawText(this.data[6], this.colorBuffer, this.x, y + (this.#height - 1));
            drawText(createContinuousString(this.data[1], this.#width - 2), this.colorBuffer, this.x + 1,  this.y + (this.#height - 1));
            drawText(this.data[4], this.colorBuffer, this.x + (this.#width - 1), this.y + (this.#height - 1));

            // right vertical line
            DrawVerticalLineCall.drawVerticalLineAt(this.data[3], this.colorBuffer, this.x + (this.#width - 1), this.y + 1, this.#height - 2);

            // left vertical line
            DrawVerticalLineCall.drawVerticalLineAt(this.data[7], this.colorBuffer, this.x, this.y + 1, this.#height - 2);
        }
    };

    constructor(data, colorBuffer, x, y, width, height) {
        super(data, colorBuffer, x, y);

        this.#width = width;
        this.#height = height;
    }
}