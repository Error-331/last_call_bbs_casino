import {
    bindGlobalAxiomFunctionsNodeJS,
    unbindGlobalAxiomFunctionsNodeJS
} from './../src/utils/test_utils';
import Sprite from "../src/classes/core/sprite_class";
import {BASE_REEL1, BASE_REEL1_COLOR_MAP} from "../src/classes/slot_machines/base/constants";
import SpriteCropPreEffect from "../src/classes/effects/pre/sprite_crop_pre_effect_class";
import SpriteMovePreEffect from "../src/classes/effects/post/sprite_move_post_effect_class";

beforeAll(() => {
    bindGlobalAxiomFunctionsNodeJS();
});

afterAll(() => {
    unbindGlobalAxiomFunctionsNodeJS();
});

describe('sum module', () => {
    test('adds 1 + 2 to equal 3', () => {

        const ef1 = new SpriteCropPreEffect({ x1: 0, x2: 10, y1: 4, y2: 7 });
        const ef2 = new SpriteMovePreEffect({ x1: 0, y1: 0 });

        let c1 = new Sprite({
            x: 5,
            y: 0,

            spriteData: BASE_REEL1,
            colorMap: BASE_REEL1_COLOR_MAP,
            effects: [ef1, ef2],
        });

        c1.draw();

        drawScene();

    });
});