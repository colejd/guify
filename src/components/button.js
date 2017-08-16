var EventEmitter = require('wolfy87-eventemitter');
var css = require('dom-css');

import styles from "../scss/components/button.scss";

export default class Button extends EventEmitter {
    constructor(root, opts, theme, uuid) {
        super();

        this.opts = opts;

        var container = require('./partials/container')(root, opts.label)
        require('./partials/label')(container, '', theme)

        var input = container.appendChild(document.createElement('button'))
        input.className = 'guify-button'

        input.textContent = opts.label

        input.addEventListener('click', opts.action)

        // Defocus on mouse up (for non-accessibility users)
        input.addEventListener('mouseup', () => {
            input.blur();
        });
    }
}
