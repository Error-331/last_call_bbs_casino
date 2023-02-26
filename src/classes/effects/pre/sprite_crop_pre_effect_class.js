import SpriteEffectClass from '../../core/sprite_effect_class';

import { PRE_SPRITE_EFFECT } from './../../../constants/sprite_effect_constants';
import { isNullOrEmpty } from './../../../utils/common_utils';

class SpriteCropPreEffect extends SpriteEffectClass {
    apply(drawable, drawInstruction) {
        if (isNullOrEmpty(drawInstruction)) {
            return null;
        }

        if (this.isDrawInstructionInYBounds(drawable, drawInstruction)) {
            drawInstruction.data = drawInstruction.data.substring(this.x1, this.x2);
            drawInstruction.colorBuffer = drawInstruction.colorBuffer.slice(this.x1, this.x2);

            drawInstruction.x = drawInstruction.x + this.x1;

            return drawInstruction;
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