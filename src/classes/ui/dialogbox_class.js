import Drawable from './../core/drawable_class';

class DialogBox extends Drawable {
    constructor(options) {
        super(options.x, options.y);

        this.color = options.color;

        this.width = options.width;
        this.height = options.height;

        this.boxCharacters = ['╔', '═', '╗', '║', '╝', '═', '╚', '║'];
    }

    draw() {
        this.drawBox(this.color, this.x, this.y, this.width, this.height);
    }
}
