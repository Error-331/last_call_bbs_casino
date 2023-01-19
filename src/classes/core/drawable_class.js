class Drawable {
    #boxCharacters = [];

    x = 0;
    y = 0;

    #currentX = 0;
    #currentY = 0;

    constructor(x = 0, y = 0) {
        this.resetTo(x, y);
    }

    advanceOneSymbolHorizontal() {
        this.#currentX = this.#currentX + 1;
    }

    advanceToNextLine() {
        this.#currentY = this.#currentY + 1;
    }

    lineFeed() {
        this.#currentY = this.#currentY + 1;
    }

    carriageReturn() {
        this.lineFeed();
        this.#currentX = this.x;
    }

    drawTextAt(text, color, x, y) {
        drawText(text, color, x, y);
    };

    drawVerticalLineAt(text, color, x, y, height) {
        for (let currentY = y; currentY <= height; currentY++) {
            drawText(text, color, x, currentY);
        }
    };

    drawAtLine(text, color) {
        this.drawTextAt(text, color, this.#currentX, this.#currentY);
    };

    drawAtLineNext(text, color) {
        this.drawAtLine(text, color);
        this.lineFeed();
    };

    drawAtLineContinue(text, color) {
        this.drawAtLine(text, color);
        this.#currentX = this.x + text.length;
    };

    drawByArray(arrayToDraw = [], color) {
        for (let symbolIdx = 0; symbolIdx < arrayToDraw.length; symbolIdx++) {
            this.drawAtLineContinue(arrayToDraw[symbolIdx], color);
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

        this.#currentX = this.x;
        this.#currentY = this.y;
    }

    reset() {
        this.resetTo(this.x, this.y);
    }

    get boxCharacters() {
        return this.#boxCharacters;
    }

    get currentX() {
        return this.#currentX;
    }

    get currentY() {
        return this.#currentY;
    }

    set boxCharacters(newBoxCharacters) {
        this.#boxCharacters = newBoxCharacters;
    }

    set currentX(currentX) {
        this.#currentX = currentX;
    }

    set currentY(currentY) {
        this.#currentY = currentY;
    }
}

export default Drawable;
