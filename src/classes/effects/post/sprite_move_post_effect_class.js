import SpriteEffectClass from '../../core/sprite_effect_class';

import { POST_SPRITE_EFFECT } from '../../../constants/sprite_effect_constants';

class SpriteMovePostEffect extends SpriteEffectClass {
    apply(drawable, drawInstruction) {
        return super.apply(drawable, drawInstruction);
    }

    applyOnSet(drawable, drawInstructions) {
        const rowX = drawInstructions[0].x;
        const rowY = drawInstructions[0].y;

        const deltaX = this.x1 - rowX;
        const deltaY = this.y1 - rowY;

        for (const drawInstruction of drawInstructions) {
            drawInstruction.x = drawInstruction.x + deltaX;
            drawInstruction.y = drawInstruction.y + deltaY;
        }

        return drawInstructions;
    }

    constructor(options) {
        super(options);
        this.effectType = POST_SPRITE_EFFECT;
    }
}

export default SpriteMovePostEffect;