var EventEmitter = require('wolfy87-eventemitter');

import styles from '../scss/components/select.scss';

export default class Select extends EventEmitter {
    constructor (root, opts, theme, uuid) {
        super();

        var i, container, input, downTriangle, upTriangle, key, option, el, keys

        container = require('./partials/container')(root, opts.label)
        require('./partials/label')(container, opts.label, theme)

        input = document.createElement('select')
        input.className = 'guify-select-dropdown'

        downTriangle = document.createElement('span')
        downTriangle.className = 'guify-select-triangle guify-select-triangle--down'

        upTriangle = document.createElement('span')
        upTriangle.className = 'guify-select-triangle guify-select-triangle--up'

        container.appendChild(downTriangle)
        container.appendChild(upTriangle)

        if (Array.isArray(opts.options)) {
            for (i = 0; i < opts.options.length; i++) {
            option = opts.options[i]
            el = document.createElement('option')
            el.value = el.textContent = option
            if (opts.initial === option) {
                el.selected = 'selected'
            }
            input.appendChild(el)
            }
        } else {
            keys = Object.keys(opts.options)
            for (i = 0; i < keys.length; i++) {
            key = keys[i]
            el = document.createElement('option')
            el.value = key
            if (opts.initial === key) {
                el.selected = 'selected'
            }
            el.textContent = opts.options[key]
            input.appendChild(el)
            }
        }

        container.appendChild(input)

        input.onchange = (data) => {
            this.emit('input', data.target.value)
        }
    }
}
