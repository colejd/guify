import css from 'dom-css';

export default (root, text, theme, width, left) => {

    let input = root.appendChild(document.createElement('input'))
    input.type = 'text'

    input.value = text;

    let inputCss = {
        position: 'absolute',
        backgroundColor: theme.colors.componentBackground,
        paddingLeft: '1%',
        height: theme.sizing.componentHeight,
        width: width,
        display: 'inline-block',
        overflow: 'hidden',
        border: 'none',

        'font-family': `'Hack', monospace`,
        'font-size': '11px',
        color: theme.colors.textSecondary,
        userSelect: 'text',
        cursor: 'text',
        lineHeight: theme.sizing.componentHeight,
        wordBreak: 'break-all',

        'box-sizing': 'border-box',
        '-moz-box-sizing': 'border-box',
        '-webkit-box-sizing': 'border-box'
    }

    if (!left) {
        inputCss.right = 0;
    }

    css(input, inputCss);

    return input;
}
