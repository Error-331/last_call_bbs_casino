import { createFill } from './array_utils';

function drawText(text = ' ', color, x, y) {
    for (let symbolIdx = 0; symbolIdx < text.length; symbolIdx++) {
        drawBuffer[y][x + symbolIdx] = text[symbolIdx];
    }
}

function drawScene() {
    let preparedBuffer = '';

    for (let y = 0; y < drawBuffer.length; y++) {
        preparedBuffer += drawBuffer[y].join('') + "\n";
    }

    console.log(preparedBuffer);
}

function bindGlobalAxiomFunctionsNodeJS() {
    // 55x19
    global.drawBuffer = new Array(20);

    for (let y = 0; y < 20; y++) {
        drawBuffer[y] = createFill(56, ' ');
    }

    global.drawText = drawText;
    global.drawScene = drawScene;
}

function unbindGlobalAxiomFunctionsNodeJS() {
    global.drawBuffer = undefined;

    global.drawText = undefined;
    global.drawScene = undefined;
}

export {
    drawText,
    drawScene,

    bindGlobalAxiomFunctionsNodeJS,
    unbindGlobalAxiomFunctionsNodeJS,
}