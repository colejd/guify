var EventEmitter = require('wolfy87-eventemitter');
let css = require('dom-css');

import styles from '../scss/components/checkbox.scss';

export default class Checkbox extends EventEmitter {
    constructor (root, opts, theme, uuid) {
        super();

        var container = require('./partials/container')(root, opts.label)
        require('./partials/label')(container, opts.label, theme)

        var input = container.appendChild(document.createElement('input'))
        input.id = 'checkbox-' + opts.label + uuid
        input.type = 'checkbox'
        input.checked = opts.initial
        input.className = 'guify-checkbox'

        var label = container.appendChild(document.createElement('label'))
        label.htmlFor = 'checkbox-' + opts.label + uuid
        label.className = 'guify-checkbox'

        setTimeout(() => {
            this.emit('initialized', input.checked)
        })

        input.onchange = (data) => {
            this.emit('input', data.target.checked)
        }
    }
}
