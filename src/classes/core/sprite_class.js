import Drawable from './drawable_class';

import { findLongestArray } from './../../utils/array_utils';
import { isNullOrEmpty } from './../../utils/common_utils';

class Sprite extends Drawable {
  #spriteData = [];
  #colorMap = [];

  #drawInstructions = [];

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

    this.prepareDrawInstructions();
  }

  prepareDrawInstructions() {
    const spriteData = this.#spriteData;
    const colorData = this.#colorMap;

    const x = this.x;

    let currentX = this.currentX;
    let currentY = this.currentY;

    for (let rowIdx = 0; rowIdx < this.#spriteData.length; rowIdx++) {
      const spriteRowData = spriteData[rowIdx];
      const colorRowData = colorData[rowIdx];

      let colorBuffer = isNullOrEmpty(colorRowData[0]) ? 0 : colorRowData[0];

      let strPos = 0;
      let symbolIdx = 0;

      for (symbolIdx = 0; symbolIdx < spriteRowData.length; symbolIdx++) {
        const currentColor = isNullOrEmpty(colorRowData[symbolIdx]) ? 0 : colorRowData[symbolIdx];

        if (currentColor !== colorBuffer) {
          const strToDraw = spriteRowData.slice(strPos, symbolIdx);
          this.#drawInstructions.push([strToDraw, colorBuffer, currentX, currentY]);

          currentX += strToDraw.length;
          strPos = symbolIdx;

          colorBuffer = currentColor;
        }
      }

      this.#drawInstructions.push([spriteRowData.slice(strPos, symbolIdx), colorBuffer, currentX, currentY]);

      currentX = x;
      currentY += 1;
    }
  }

  draw() {
    for (const drawInstructionRow of this.#drawInstructions) {
      drawText(drawInstructionRow[0], drawInstructionRow[1], drawInstructionRow[2], drawInstructionRow[3]);
    }
  }

  get spriteData() {
    return this.#spriteData;
  }

  get colorMap() {
    return this.#colorMap;
  }

  set spriteData(spriteData) {
    this.#spriteData = spriteData;

    this.#width = findLongestArray(spriteData);
    this.#height = spriteData.length;
  }

  set colorMap(colorMap) {
    this.#colorMap = colorMap;
  }
}

export default Sprite;
