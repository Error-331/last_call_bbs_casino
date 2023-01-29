import 'core-js/es/array';
import 'core-js/es/weak-map';

import AnimationFrame from './classes/core/animation_frame_class';

import {
    BASE_REEL_SYMBOL1,
    BASE_REEL_SYMBOL2,
    BASE_REEL_SYMBOL3,

    BASE_REEL_SYMBOL1_COLOR_MAP,
    BASE_REEL_SYMBOL2_COLOR_MAP,
    BASE_REEL_SYMBOL3_COLOR_MAP,
} from './classes/slot_machines/base/constants';
import Sprite from "./classes/core/sprite_class";
import {isNullOrEmpty} from "./utils/common_utils";

const a1 = new AnimationFrame({speed: 1})
//let x1 = 11;
let c1 = new Sprite({
    x: 5,
    y: 0,

    spriteData: BASE_REEL_SYMBOL1,
    colorMap: BASE_REEL_SYMBOL1_COLOR_MAP,
});

let c2 = new Sprite({
    x: 5,
    y: 4,

    spriteData: BASE_REEL_SYMBOL2,
    colorMap: BASE_REEL_SYMBOL2_COLOR_MAP,
});

let c3 = new Sprite({
    x: 5,
    y: 8,

    spriteData: BASE_REEL_SYMBOL3,
    colorMap: BASE_REEL_SYMBOL3_COLOR_MAP,
});

let c4 = new Sprite({
    x: 15,
    y: 0,

    spriteData: BASE_REEL_SYMBOL1,
    colorMap: BASE_REEL_SYMBOL1_COLOR_MAP,
});

let c5 = new Sprite({
    x: 15,
    y: 4,

    spriteData: BASE_REEL_SYMBOL2,
    colorMap: BASE_REEL_SYMBOL2_COLOR_MAP,
});

let c6 = new Sprite({
    x: 15,
    y: 8,

    spriteData: BASE_REEL_SYMBOL3,
    colorMap: BASE_REEL_SYMBOL3_COLOR_MAP,
});

function getName() {
    return 'Casino';
}

function onConnect()
{
    // Reset the server variables when a new user connects:
    let lastKey = '';
    let keyBuffer = loadData();
}

let a = true;
let b = 1;

function d1() {
    drawText(b, 17, 0, 0);
}

function d2() {
    a = true;

}


function onUpdate()
{
    clearScreen();


    c1.draw();
    c2.draw();
    c3.draw();

    c4.draw();
    c5.draw();
    c6.draw();

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