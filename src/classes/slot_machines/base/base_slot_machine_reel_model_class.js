import { isNil, isNullOrEmpty, defaultTo } from './../../../utils/common_utils';

class BaseSlotMachineReelModel {
    #shuffle = true;
    #symbols = new Map();

    constructor(options) {
        options = defaultTo({}, options);
        const symbols = defaultTo([], options.symbols);

        this.addSymbols(symbols);
    }

    addSymbols(symbols) {
        if (isNullOrEmpty(symbols)) {
            throw new Error('Cannot create a reel model - symbols are not specified');
        }

        this.#symbols = new Map();

        symbols.forEach((symbol) => {
            if (isNil(symbol.id)) {
                throw new Error('Reel symbol cannot be null');
            }

            if (this.#symbols.has(symbol.id)) {
                throw new Error('Such reel symbol id is already in use: ' + symbol.id);
            }

            const id = symbol.id;

            delete symbol.id;
            this.#symbols.set(id, symbol);
        });
    }
}

export default BaseSlotMachineReelModel;
