import { SCREEN_WIDTH, SCREEN_HEIGHT, } from './../../constants/screen_constants';
import Renderer from './renderer_class';

class HTMLRenderer extends Renderer {
    #$sceneParent = null;
    #$scene = null;

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

    render() {

    }

    constructor(sceneElement) {
        super();

        this.#$sceneParent = sceneElement;
        this.#$scene = this.#createSceneContent();

        this.#$sceneParent.appendChild(this.#$scene);
    }
}

export default HTMLRenderer;