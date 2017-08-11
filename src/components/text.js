var EventEmitter = require('wolfy87-eventemitter');
var css = require('dom-css')

export default class Text extends EventEmitter {
    constructor (root, opts, theme, uuid) {
        super();

        var container = require('./partials/container')(root, opts.label)
        require('./partials/label')(container, opts.label, theme)

        var input = container.appendChild(document.createElement('input'))
        input.type = 'text'
        input.className = 'guify-text'
        if (opts.initial) input.value = opts.initial

        input.onfocus = () => {
            css(input, {outline: 'none'})
        }

        css(input, {
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
            this.emit('initialized', input.value)
        })

        input.oninput = (data) => {
            this.emit('input', data.target.value)
        }
    }
}
