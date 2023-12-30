/*import { onUpdate } from './index';


function clearScreen() {
    console.log('123');
}

window.clearScreen = clearScreen;

const SCREEN_WIDTH = 30;
const SCREEN_HEIGHT = 50;



class HTMLRenderer {
    #$sceneParent = null;
    #$scene = null;

    clear() {

    }

    #createSceneContent() {
        const $fragment = document.createDocumentFragment();

        for (let rowIdx = 0; rowIdx < SCREEN_HEIGHT; rowIdx++) {
            const $row = document.createElement('div');
            $fragment.appendChild($row);

            for (let columnIdx = 0; columnIdx < SCREEN_WIDTH; columnIdx++) {
                const $column = document.createElement('div');
                $column.textContent = ' ';

                $column.style.display = 'inline-block';
                $column.style.width = '16px';
                $column.style.height = '16px';

                $row.appendChild($column);
            }
        }

        return $fragment;
    }

    constructor(sceneElement) {
        this.#$sceneParent = sceneElement;
        this.#$scene = this.#createSceneContent();

        this.#$sceneParent.appendChild(this.#$scene);
    }
}

const $body= document.querySelector('body');
const doubleBuffer = new HTMLRenderer($body);

//onUpdate();*/