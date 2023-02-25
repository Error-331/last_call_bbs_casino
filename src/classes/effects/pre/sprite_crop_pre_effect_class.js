import SpriteEffectClass from '../../core/sprite_effect_class';
import { isNullOrEmpty } from './../../../utils/common_utils';

class SpriteCropPreEffect extends SpriteEffectClass{
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
}

export default SpriteCropPreEffect;