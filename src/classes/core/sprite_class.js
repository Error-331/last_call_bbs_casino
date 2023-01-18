import Drawable from './drawable_class';
import { findLongestArray } from './../../utils/array_utils';

class Sprite extends Drawable {
  #spriteData = [];
  #colorMap = [];

  #width = 0;
  #height = 0;

  constructor(options) {
    const {
      x = 0,
      y = 0,

      spriteData = [],
      colorMap = [],
    } = options;

    super(x, y);

    this.spriteData = spriteData;
    this.#colorMap = colorMap;
  }

  set spriteData(spriteData) {
      this.#spriteData = spriteData;

      this.#width = findLongestArray(spriteData);
      this.#height = spriteData.length;
  }
}

export default Sprite;
