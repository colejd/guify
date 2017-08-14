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

        input.onfocus = function () {
            css(input, {outline: 'none'})
        }

        input.textContent = opts.label

        css(input, {
            position: 'absolute',
            textAlign: 'center',
            height: '20px',
            width: '62%',
            border: 'none',
            cursor: 'pointer',
            right: 0,
            fontFamily: 'inherit'
        })

        input.addEventListener('click', opts.action)
    }
}
