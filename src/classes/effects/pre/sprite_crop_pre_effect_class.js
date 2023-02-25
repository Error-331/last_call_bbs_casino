import SpriteEffectClass from '../../core/sprite_effect_class';

import { PRE_SPRITE_EFFECT } from './../../../constants/sprite_effect_constants';
import { isNullOrEmpty } from './../../../utils/common_utils';

class SpriteCropPreEffect extends SpriteEffectClass {
    apply(drawable, drawInstruction) {
        if (isNullOrEmpty(drawInstruction)) {
            return null;
        }

        const [
            spriteRowData,
            colorBuffer,
            rowX,
            rowY,
        ] = drawInstruction;

        if (this.isDrawInstructionInYBounds(drawable, drawInstruction)) {
            const newSpriteRowData = spriteRowData.substring(this.x1, this.x2);
            const newColorBuffer = colorBuffer.slice(this.x1, this.x2);

            return [newSpriteRowData, newColorBuffer, rowX + this.x1, rowY];
        } else {
            return null;
        }
    }

    constructor(options) {
        super(options);
        this.effectType = PRE_SPRITE_EFFECT;
    }
}

export default SpriteCropPreEffect;