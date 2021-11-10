import EventEmitter from 'wolfy87-eventemitter';
import css from 'dom-css';

const styles = require('styles/components/checkbox-style.js');

export default class Checkbox extends EventEmitter {
    constructor (root, opts, theme, uuid) {
        super();

        this.opts = opts;

        this.container = require('./partials/container')(root, opts.label, theme)
        this.label = require('./partials/label')(this.container, opts.label, theme)

        this.input = this.container.appendChild(document.createElement('input'))
        this.input.id = 'checkbox-' + opts.property + uuid
        this.input.type = 'checkbox'
        this.input.checked = opts.initial
        this.input.className = styles['guify-checkbox'];
        // Add ARIA attribute to input based on label text
        if(opts.label) this.input.setAttribute('aria-label', opts.label);

        var label = this.container.appendChild(document.createElement('label'))
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
