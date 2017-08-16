import EventEmitter from 'wolfy87-eventemitter';
import css from 'dom-css';

export default class Text extends EventEmitter {
    constructor (root, opts, theme, uuid) {
        super();

        this.opts = opts;

        var container = require('./partials/container')(root, opts.label)
        require('./partials/label')(container, opts.label, theme)

        this.input = container.appendChild(document.createElement('input'))
        this.input.type = 'text'
        this.input.className = 'guify-text'
        if (opts.initial) this.input.value = opts.initial
        // Add ARIA attribute to input based on label text
        if(opts.label) this.input.setAttribute('aria-label', opts.label);

        css(this.input, {
            position: 'absolute',
            paddingLeft: '6px',
            height: '20px',
            width: '62%',
            border: 'none',
            background: theme.colors.background2,
            color: theme.colors.text2,
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

        // Gain focus
        this.input.addEventListener('focus', () => {
            css(this.input, { outline: 'none' });
            this.focused = true;
        });

        // Lose focus
        this.input.addEventListener('blur', () => {
            this.focused = false;
        });
    }

    SetValue(value) {
        if(this.focused !== true)
            this.input.value = value;
    }

    GetValue() {
        return this.input.value;
    }
}
