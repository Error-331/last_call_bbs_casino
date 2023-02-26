class DrawInstruction {
    data = '';
    colorBuffer = 0;

    x = null;
    y = null;

    length = 0;

    constructor(data, colorBuffer, x, y) {
        this.data = data;
        this.colorBuffer = colorBuffer;

        this.x = x;
        this.y = y;

        this.length = data.length;
    }

    draw() {
        drawText(this.data, this.colorBuffer, this.x, this.y);
    }

    set data(data) {
        this.data = data;
        this.length = data.length;
    }
}

export default DrawInstruction;