var EventEmitter = require('wolfy87-eventemitter');
var css = require('dom-css')

export default class Text extends EventEmitter {
    constructor (root, opts, theme, uuid) {
        super();

        var container = require('./partials/container')(root, opts.label)
        require('./partials/label')(container, opts.label, theme)

        this.input = container.appendChild(document.createElement('input'))
        this.input.type = 'text'
        this.input.className = 'guify-text'
        if (opts.initial) this.input.value = opts.initial

        this.input.onfocus = () => {
            css(this.input, {outline: 'none'})
        }

        css(this.input, {
            position: 'absolute',
            paddingLeft: '6px',
            height: '20px',
            width: '62%',
            border: 'none',
            background: theme.background2,
            color: theme.text2,
            fontFamily: 'inherit',
            'box-sizing': 'border-box',
            '-moz-box-sizing': 'border-box',
            '-webkit-box-sizing': 'border-box',
            resize: 'vertical'
        })

        setTimeout(() => {
            this.emit('initialized', this.input.value)
        })

        this.input.oninput = (data) => {
            this.emit('input', data.target.value)
        }
    }

    SetValue(value) {
        this.input.value = value;
    }

    GetValue() {
        return this.input.value;
    }
}
