import 'core-js/es/weak-map';

import AnimationFrame from './classes/core/animation_frame_class';
import Sprite from './classes/core/sprite_class';
import {BASE_REEL_SYMBOL1, BASE_REEL_SYMBOL1_COLOR_MAP} from "./classes/slot_machines/base/constants";

//const a1 = new AnimationFrame({speed: 444})
//let x1 = 11;

const c1 = new Sprite({
    x: 5,
    y: 5,

    spriteData: BASE_REEL_SYMBOL1,
    colorMap: BASE_REEL_SYMBOL1_COLOR_MAP,
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

function onUpdate()
{
    clearScreen();

   /* function d1() {
        drawText(x1, 17, x1, 9);
    }

    function d2() {
        if (x1 < 54) {
            x1 = x1 + 1;
        }

    }


    a1.draw(d1, d2);*/
    c1.draw();
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