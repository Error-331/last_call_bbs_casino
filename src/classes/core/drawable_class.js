class Drawable {
    #boxCharacters = [];

    x = 0;
    y = 0;

    currentX = 0;
    currentY = 0;

    constructor(x = 0, y = 0) {
        this.resetTo(x, y);
    }

    drawTextAt(text, color, x, y) {
        drawText(text, color, x, y);
    };

    drawVerticalLineAt(text, color, x, y, height) {
        for (let currentY = y; currentY <= height; currentY++) {
            drawText(text, color, x, currentY);
        }
    };

    drawLine(text, color) {
        this.drawTextAt(text, color, this.currentX, this.currentY);
    };

    drawNextLine(text, color) {
        this.drawLine(text, color);
        this.currentY = this.currentY + 1;
    };

    drawContinueLine(text, color) {
        this.drawLine(text, color);
        this.currentX = this.x + text.length;
    };

    drawByArray(arrayToDraw, color) {
        for (let lineIdx = 0; lineIdx < arrayToDraw.length; lineIdx++) {
            this.drawNextLine(arrayToDraw[lineIdx], color);
        }
    };

    drawRegularBox(color, x, y, width, height) {
        drawBox(color, x, y, width, height);
    }

    drawBox(color, x, y, width, height) {
        drawText(this.boxCharacters[0], color, x, y);
        this.drawTextAt(createContinuousString(this.boxCharacters[1], width - 2), color, x + 1, y);
        drawText(this.boxCharacters[2], color, x + (width - 1), y);

        drawText(this.boxCharacters[6], color, x, y + (height - 1));
        this.drawTextAt(createContinuousString(this.boxCharacters[1], width - 2), color, x + 1,  y + (height - 1));
        drawText(this.boxCharacters[4], color, x + (width - 1), y + (height - 1));

        // right vertical line
        this.drawVerticalLineAt(this.boxCharacters[3], color, x + (width - 1), y + 1, height - 2);

        // left vertical line
        this.drawVerticalLineAt(this.boxCharacters[7], color, x, y + 1, height - 2);
    }

    resetTo(x, y) {
        this.x = x;
        this.y = y;

        this.currentX = this.x;
        this.currentY = this.y;
    }

    set boxCharacters(newBoxCharacters) {
        this.#boxCharacters = newBoxCharacters;
    }

    get boxCharacters() {
        return this.#boxCharacters;
    }
}

export default Drawable;
