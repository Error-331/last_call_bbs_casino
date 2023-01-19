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
    for (let rowIdx = 0; rowIdx < this.#spriteData.length; rowIdx++) {
      const spriteRowData = this.#spriteData[rowIdx];
      const colorRowData = this.#colorMap[rowIdx];

      for (let symbolIdx = 0; symbolIdx < spriteRowData.length; symbolIdx++) {
        const symbol = spriteRowData[symbolIdx];
        const color = isNullOrEmpty(colorRowData[symbolIdx]) ? 0 : colorRowData[symbolIdx];

        this.drawAtLine(symbol, color);
        this.advanceOneSymbolHorizontal();
      }

      this.advanceToNextLine();
    }

    this.reset()
  }

  set spriteData(spriteData) {
      this.#spriteData = spriteData;

      this.#width = findLongestArray(spriteData);
      this.#height = spriteData.length;
  }
}

export default Sprite;
