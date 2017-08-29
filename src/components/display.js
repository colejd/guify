import css from 'dom-css';

/**
 * Display component. Shows the state of a variable.
 */
export default class Display {
    constructor (root, opts, theme, uuid) {
        this.opts = opts;

        let container = require('./partials/container')(root, opts.label, theme)

        require('./partials/label')(container, opts.label, theme)

        this.text = container.appendChild(document.createElement('div'));
        css(this.text, {
            display: 'inline-block',
            height: 'unset',
            width: `calc(100% - ${theme.sizing.labelWidth})`,
            border: 'none',
            //background: theme.background2,
            color: theme.colors.textSecondary,
            fontFamily: 'inherit',
            'box-sizing': 'border-box',
            '-moz-box-sizing': 'border-box',
            '-webkit-box-sizing': 'border-box',
            verticalAlign: 'sub',
            'line-height': theme.sizing.componentHeight,
            'user-select': 'text'
        });

        // Add ARIA attribute to text based on label text
        if(opts.label) this.text.setAttribute('aria-label', opts.label);


    }

    SetValue(value) {
        this.text.innerHTML = value.toString();
    }

    GetValue() {
        return this.text.innerHTML.toString();
    }
}
