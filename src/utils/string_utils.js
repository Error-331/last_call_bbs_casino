function createContinuousString(char, charCount) {
    let newString = '';

    for(let charIdx = 0; charIdx < charCount; charIdx++) {
        newString += char;
    }

    return newString;
}