import 'core-js/es/weak-map';

import AnimationFrame from './classes/core/animation_frame_class';

const a1 = new AnimationFrame({speed: 444})
let x1 = 11;

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

    function d1() {
        drawText(x1, 17, x1, 9);
    }

    function d2() {
        if (x1 < 54) {
            x1 = x1 + 1;
        }

    }


    a1.draw(d1, d2);
}

function onInput(key)
{

}

export {
    getName,
    onConnect,
    onUpdate,
    onInput
}