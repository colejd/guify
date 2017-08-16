var EventEmitter = require('wolfy87-eventemitter');
let css = require('dom-css');

import styles from '../scss/components/checkbox.scss';

export default class Checkbox extends EventEmitter {
    constructor (root, opts, theme, uuid) {
        super();

        this.opts = opts;

        var container = require('./partials/container')(root, opts.label)
        require('./partials/label')(container, opts.label, theme)

        this.input = container.appendChild(document.createElement('input'))
        this.input.id = 'checkbox-' + opts.label + uuid
        this.input.type = 'checkbox'
        this.input.checked = opts.initial
        this.input.className = 'guify-checkbox'
        // Add ARIA attribute to input based on label text
        if(opts.label) this.input.setAttribute('aria-label', opts.label);

        var label = container.appendChild(document.createElement('label'))
        label.htmlFor = this.input.id;

        setTimeout(() => {
            this.emit('initialized', this.input.checked)
        })

        this.input.onchange = (data) => {
            this.emit('input', data.target.checked)
        }

    }

    SetValue(value) {
        this.input.checked = value;
    }

    GetValue() {
        return this.input.checked;
    }
}
