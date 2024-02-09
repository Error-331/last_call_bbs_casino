import Drawable from '../../drawable/drawable_class';
import { defaultTo } from './../../../utils/common_utils';

class BaseSlotMachine extends Drawable {
    #reels = null;
    #reelStopDelay = 0;

    #rowCount = 3;

    #spinVelocity = 0;
    #spinning = false;
    #stopping = false;

    #uiData = {};
    #reelsData = [];

    constructor(options = {}) {
        super(options.x, options.y);
        this.#reelsData = defaultTo([], options.reelsData);

        this.resetTo(options.x, options.y);
    }

    onReelStopped() {};
    onSpinEnded() {};
    onSpinStarted() {};

    addReel(reelData) {};
    spin(reelData) {};
    draw(reelData) {
        this.drawByArray(this.uiData, 15);
    };
}

export default BaseSlotMachine;