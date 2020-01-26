import EventEmitter from 'wolfy87-eventemitter';
import css from 'dom-css';

const styles = require('styles/components/button-style.js');

export default class Button extends EventEmitter {
    constructor(root, opts, theme, uuid) {
        super();

        this.opts = opts;

        this.container = require('./partials/container')(root, opts.label, theme)
        // require('./partials/label')(this.container, '', theme)

        var input = this.container.appendChild(document.createElement('button'))
        input.className = styles['guify-button'];

        input.textContent = opts.label
        this.label = input
        this.button = input

        input.addEventListener('click', opts.action)

        // Defocus on mouse up (for non-accessibility users)
        input.addEventListener('mouseup', () => {
            input.blur();
        });
    }
}
