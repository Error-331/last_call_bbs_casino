import Drawable from './drawable_class';

import { findLongestArray } from './../../utils/array_utils';
import { isNullOrEmpty } from './../../utils/common_utils';

class Sprite extends Drawable {
    #spriteData = [];
    #colorMap = [];

    #drawInstructions = [];

    #width = 0;
    #height = 0;

    #effects = [];

    constructor(options) {
        const {
            x = 0,
            y = 0,

            spriteData = [],
            colorMap = [],

            effects = [],
        } = options;

        super(x, y);

        this.#spriteData = spriteData;
        this.#colorMap = colorMap;

        this.#effects = effects;

        this.prepareDrawInstructions();
    }

    #applyEffects(drawInstructions) {
        let preparedDrawInstructions = drawInstructions;

        for (const effect of this.#effects) {
            preparedDrawInstructions = effect.apply(this, preparedDrawInstructions)
        }

        return preparedDrawInstructions;
    }

    updateDimensions() {
        this.#width = findLongestArray(this.#spriteData);
        this.#height = this.#spriteData.length;
    }

    prepareDrawInstructions() {
        const spriteData = this.#spriteData;
        const colorData = this.#colorMap;

        const x = this.x;

        let currentX = this.currentX;
        let currentY = this.currentY;

        this.#drawInstructions = [];

        for (let rowIdx = 0; rowIdx < this.#spriteData.length; rowIdx++) {
            const drawInstructions = this.#applyEffects([spriteData[rowIdx], colorData[rowIdx], currentX, currentY])

            if (isNullOrEmpty(drawInstructions)) {
                currentX = x;
                currentY += 1;

                continue;
            }

            const spriteRowData = drawInstructions[0];
            const colorRowData = drawInstructions[1];

            currentX = drawInstructions[2];
            currentY = drawInstructions[3];

            let colorBuffer = isNullOrEmpty(colorRowData[0]) ? 0 : colorRowData[0];

            let strPos = 0;
            let symbolIdx = 0;

            for (symbolIdx = 0; symbolIdx < spriteRowData.length; symbolIdx++) {
                const currentColor = isNullOrEmpty(colorRowData[symbolIdx]) ? 0 : colorRowData[symbolIdx];

                if (currentColor !== colorBuffer) {
                    const strToDraw = spriteRowData.slice(strPos, symbolIdx);
                    this.#drawInstructions.push([strToDraw, colorBuffer, currentX, currentY]);

                    currentX += strToDraw.length;
                    strPos = symbolIdx;

                    colorBuffer = currentColor;
                }
            }

            this.#drawInstructions.push([spriteRowData.slice(strPos, symbolIdx), colorBuffer, currentX, currentY]);

            currentX = x;
            currentY += 1;
        }
    }

    draw() {
        for (const drawInstructionRow of this.#drawInstructions) {
            drawText(drawInstructionRow[0], drawInstructionRow[1], drawInstructionRow[2], drawInstructionRow[3]);
        }
    }

    get spriteData() {
        return this.#spriteData;
    }

    get colorMap() {
        return this.#colorMap;
    }

    get drawInstructions() {
        return this.#drawInstructions;
    }

    set spriteData(spriteData) {
        this.#spriteData = spriteData;

        this.updateDimensions();
        this.prepareDrawInstructions();
    }

    set colorMap(colorMap) {
        this.#colorMap = colorMap;
        this.prepareDrawInstructions();
    }
}

export default Sprite;
