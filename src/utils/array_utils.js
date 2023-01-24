function findLongestArray(parentArray = []) {
  let maxLength = 0;

  for (const childArray of parentArray) {
    maxLength = childArray.length > maxLength ? childArray.length : maxLength;
  }

  return maxLength;
}

// TODO: checks
function createFill(length, padding) {
  return new Array(length).fill(padding);
}

export {
  createFill,
  findLongestArray,
}
