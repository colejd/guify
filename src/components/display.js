let css = require('dom-css');

/**
 * Display component. Shows the state of a variable.
 */
export default class Display {
    constructor (root, opts, theme, uuid) {
        this.opts = opts;

        let container = require('./partials/container')(root, opts.label)

        require('./partials/label')(container, opts.label, theme)

        this.text = container.appendChild(document.createElement('div'));
        css(this.text, {
            display: 'inline-block',
            //'padding-left': '6px',
            //'padding-right': '6px',
            height: 'unset',
            width: '62%',
            border: 'none',
            //background: theme.background2,
            color: theme.text2,
            fontFamily: 'inherit',
            'box-sizing': 'border-box',
            '-moz-box-sizing': 'border-box',
            '-webkit-box-sizing': 'border-box',
            verticalAlign: 'sub',
            'line-height': '20px'
        });


    }

    SetValue(value) {
        this.text.innerHTML = value.toString();
    }

    GetValue() {
        return this.text.innerHTML.toString();
    }
}
