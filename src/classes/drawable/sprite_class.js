import Drawable from './drawable_class';
import DrawCall from './../draw_calls/draw_call_class';

import { PRE_SPRITE_EFFECT, POST_SPRITE_EFFECT } from './../../constants/sprite_effect_constants';

import { findLongestArray } from './../../utils/array_utils';
import { isNullOrEmpty } from './../../utils/common_utils';

class Sprite extends Drawable {
    #spriteData = [];
    #colorMap = [];

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

        this.prepareDrawCalls();
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

            this.addDrawCalls(effect.applyOnSet(this, this.drawCalls));
        }
    }

    #applyPreEffects(drawCall) {
        return this.#applyEffects(PRE_SPRITE_EFFECT, drawCall);
    }

    #applyPostEffects(drawCall) {
        return this.#applyEffects(POST_SPRITE_EFFECT, drawCall);
    }

    #applyPostEffectsOnSet() {
        return this.#applyEffectsOnSet(POST_SPRITE_EFFECT);
    }

    updateDimensions() {
        this.#width = findLongestArray(this.#spriteData);
        this.#height = this.#spriteData.length;
    }

    prepareDrawCalls() {
        const spriteData = this.#spriteData;
        const colorData = this.#colorMap;

        const x = this.x;

        let currentX = this.currentX;
        let currentY = this.currentY;

        this.clearDrawCalls();

        for (let rowIdx = 0; rowIdx < this.#spriteData.length; rowIdx++) {
            let drawCall = new DrawCall(spriteData[rowIdx], colorData[rowIdx], currentX, currentY);
            drawCall = this.#applyPreEffects(drawCall);

            if (isNullOrEmpty(drawCall)) {
                currentX = x;
                currentY += 1;

                continue;
            }

            currentX = drawCall.x;
            currentY = drawCall.y;

            let colorBuffer = isNullOrEmpty(drawCall.colorBuffer[0]) ? 0 : drawCall.colorBuffer[0];

            let strPos = 0;
            let symbolIdx = 0;

            for (symbolIdx = 0; symbolIdx < drawCall.data.length; symbolIdx++) {
                const currentColor = isNullOrEmpty(drawCall.colorBuffer[symbolIdx]) ? 0 : drawCall.colorBuffer[symbolIdx];

                if (currentColor !== colorBuffer) {
                    const strToDraw = drawCall.data.slice(strPos, symbolIdx);
                    const postDrawInstructions = this.#applyPostEffects(new DrawCall(strToDraw, colorBuffer, currentX, currentY));

                    if (!isNullOrEmpty(postDrawInstructions)) {
                        this.addDrawCall(postDrawInstructions);
                    }

                    currentX += strToDraw.length;
                    strPos = symbolIdx;

                    colorBuffer = currentColor;
                }
            }

            const postDrawInstructions = this.#applyPostEffects(new DrawCall(drawCall.data.slice(strPos, symbolIdx), colorBuffer, currentX, currentY));

            if (!isNullOrEmpty(postDrawInstructions)) {
                this.addDrawCall(postDrawInstructions);
            }

            currentX = x;
            currentY += 1;
        }

        this.#applyPostEffectsOnSet();
        super.prepareDrawCalls();
    }

    get spriteData() {
        return this.#spriteData;
    }

    get colorMap() {
        return this.#colorMap;
    }

    set spriteData(spriteData) {
        this.#spriteData = spriteData;

        this.updateDimensions();
        this.prepareDrawCalls();
    }

    set colorMap(colorMap) {
        this.#colorMap = colorMap;
        this.prepareDrawCalls();
    }
}

export default Sprite;
