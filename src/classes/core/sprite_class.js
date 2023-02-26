import Drawable from './drawable_class';
import DrawInstruction from './draw_instruction_class';

import { PRE_SPRITE_EFFECT, POST_SPRITE_EFFECT } from './../../constants/sprite_effect_constants';

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

    #applyEffects(effectType, drawInstruction) {
        let preparedDrawInstruction = drawInstruction;

        for (const effect of this.#effects) {
            if (effect.effectType !== effectType) {
                continue;
            }

            preparedDrawInstruction = effect.apply(this, preparedDrawInstruction)
        }

        return preparedDrawInstruction;
    }

    #applyEffectsOnSet(effectType) {
        for (const effect of this.#effects) {
            if (effect.effectType !== effectType) {
                continue;
            }

            this.#drawInstructions = effect.applyOnSet(this, this.#drawInstructions);
        }
    }

    #applyPreEffects(drawInstruction) {
        return this.#applyEffects(PRE_SPRITE_EFFECT, drawInstruction);
    }

    #applyPostEffects(drawInstruction) {
        return this.#applyEffects(POST_SPRITE_EFFECT, drawInstruction);
    }

    #applyPostEffectsOnSet() {
        return this.#applyEffectsOnSet(POST_SPRITE_EFFECT);
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
            let drawInstruction = new DrawInstruction(spriteData[rowIdx], colorData[rowIdx], currentX, currentY);
            drawInstruction = this.#applyPreEffects(drawInstruction);

            if (isNullOrEmpty(drawInstruction)) {
                currentX = x;
                currentY += 1;

                continue;
            }

            currentX = drawInstruction.x;
            currentY = drawInstruction.y;

            let colorBuffer = isNullOrEmpty(drawInstruction.colorBuffer[0]) ? 0 : drawInstruction.colorBuffer[0];

            let strPos = 0;
            let symbolIdx = 0;

            for (symbolIdx = 0; symbolIdx < drawInstruction.data.length; symbolIdx++) {
                const currentColor = isNullOrEmpty(drawInstruction.colorBuffer[symbolIdx]) ? 0 : drawInstruction.colorBuffer[symbolIdx];

                if (currentColor !== colorBuffer) {
                    const strToDraw = drawInstruction.data.slice(strPos, symbolIdx);
                    const postDrawInstructions = this.#applyPostEffects(new DrawInstruction(strToDraw, colorBuffer, currentX, currentY));

                    if (!isNullOrEmpty(postDrawInstructions)) {
                        this.#drawInstructions.push(postDrawInstructions);
                    }

                    currentX += strToDraw.length;
                    strPos = symbolIdx;

                    colorBuffer = currentColor;
                }
            }

            const postDrawInstructions = this.#applyPostEffects(new DrawInstruction(drawInstruction.data.slice(strPos, symbolIdx), colorBuffer, currentX, currentY));

            if (!isNullOrEmpty(postDrawInstructions)) {
                this.#drawInstructions.push(postDrawInstructions);
            }

            currentX = x;
            currentY += 1;
        }

        this.#applyPostEffectsOnSet();
    }

    draw() {
        for (const drawInstructionRow of this.#drawInstructions) {
            drawInstructionRow.draw();
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
