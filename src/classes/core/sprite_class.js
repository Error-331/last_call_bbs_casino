import Drawable from './drawable_class';

import { findLongestArray } from './../../utils/array_utils';
import { isNullOrEmpty } from './../../utils/common_utils';

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

  draw() {
    const spriteData = this.#spriteData;
    const colorData = this.#colorMap;

    const x = this.x;

    let currentX = this.currentX;
    let currentY = this.currentY;

    for (let rowIdx = 0; rowIdx < this.#spriteData.length; rowIdx++) {
      const spriteRowData = spriteData[rowIdx];
      const colorRowData = colorData[rowIdx];

      for (let symbolIdx = 0; symbolIdx < spriteRowData.length; symbolIdx++) {
        const symbol = spriteRowData[symbolIdx];
        const color = isNullOrEmpty(colorRowData[symbolIdx]) ? 0 : colorRowData[symbolIdx];

        drawText(symbol, color, currentX, currentY);
        currentX += 1;
      }

      currentX = x;
      currentY += 1;
    }
  }

  set spriteData(spriteData) {
    this.#spriteData = spriteData;

    this.#width = findLongestArray(spriteData);
    this.#height = spriteData.length;
  }
}

export default Sprite;
