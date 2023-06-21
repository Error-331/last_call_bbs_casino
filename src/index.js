import 'core-js/es/array';
import 'core-js/es/weak-map';

import AnimationFrame from './classes/core/animation_frame_class';
import Drawer from './classes/core/drawer_class';

import {
    BASE_REEL_SYMBOL1,
    BASE_REEL_SYMBOL2,
    BASE_REEL_SYMBOL3,

    BASE_REEL1,

    BASE_REEL_SYMBOL1_COLOR_MAP,
    BASE_REEL_SYMBOL2_COLOR_MAP,
    BASE_REEL_SYMBOL3_COLOR_MAP,

    BASE_REEL1_COLOR_MAP,
} from './classes/slot_machines/base/constants';
import Sprite from "./classes/core/sprite_class";
import SpriteCropPreEffect from './classes/effects/pre/sprite_crop_pre_effect_class';



const a1 = new AnimationFrame({speed: 10})
//let x1 = 11;

const ef1 = new SpriteCropPreEffect({ x1: 2, x2: 10, y1: 0, y2: 0 });

let c1 = new Sprite({
    x: 5,
    y: 0,

    spriteData: BASE_REEL1,
    colorMap: BASE_REEL1_COLOR_MAP,
   // effects: [ef1],
});

let c2 = new Sprite({
    x: 15,
    y: 0,

    spriteData: BASE_REEL1,
    colorMap: BASE_REEL1_COLOR_MAP,
    // effects: [ef1],
});

let c3 = new Sprite({
    x: 25,
    y: 0,

    spriteData: BASE_REEL1,
    colorMap: BASE_REEL1_COLOR_MAP,
    // effects: [ef1],
});

const drawerInstance = new Drawer();
drawerInstance.addDrawable(c1);

function getName() {
    return 'Casino';
}

function onConnect()
{
    // Reset the server variables when a new user connects:
    let lastKey = '';
    let keyBuffer = loadData();
}
let x1 = 0;

let b1 = () => {

    drawText(x1, 10, x1, 10 )
    c1.draw();
    //drawerInstance.draw();

}

let sign = false

let b2 = () => {
    clearScreen();

    if (ef1.y1 === 0) {
        sign = true;
    } else if (ef1.y1 === 10) {
        sign = false;
    }

    if (sign) {
        ef1.setEffectArea(ef1.x1, ef1.x2, ef1.y1 + 1, ef1.y2 + 1);
    } else {
        ef1.setEffectArea(ef1.x1, ef1.x2, ef1.y1 - 1, ef1.y2 - 1);
    }


    c1.prepareDrawInstructions();
}

function onUpdate()
{
    clearScreen();
    //drawText('s', 10, 55, 19); // 0-55 // 0-19
    //a1.draw(b1, b2);
    c1.draw();
    c2.draw();
    c3.draw();

}
// colors 1-17
function onInput(key)
{

}

export {
    getName,
    onConnect,
    onUpdate,
    onInput
}
