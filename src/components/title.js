var css = require('dom-css');

export default class Title {
    constructor (root, opts, theme) {
        this.opts = opts;

        var container = require('./partials/container')(root, opts.label)
        css(container, {
            'margin-top': '2%',
            'margin-bottom': '1%',
        });

        var background = container.appendChild(document.createElement('div'));
        css(background, {
            'box-sizing': 'border-box',
            left: 0,
            width: '100%',
            display: 'inline-block',
            height: '20px',
            verticalAlign: 'top',
        });

        var label = background.appendChild(document.createElement('div'));
        label.innerHTML = '&#9632; ' + opts.label + ' &#9632;';
        css(label, {
            color: theme.text1,
            display: 'inline-block',
            verticalAlign: 'sub',
            height: '20px',
            //"padding-left": "4%",
            //"padding-right": "4%",
            //"font-weight": "bold",
        });
    }
}
