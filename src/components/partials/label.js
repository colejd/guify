import css from 'dom-css';

export default (root, text, theme) => {
    var background = root.appendChild(document.createElement('div'));
    css(background, {
        left: 0,
        width: `calc(${theme.sizing.labelWidth} - 2%)`,
        display: 'inline-block',
        'min-height': theme.sizing.componentHeight,
        paddingRight: '2%',
        verticalAlign: 'top'
    });

    var label = background.appendChild(document.createElement('div'));
    label.innerHTML = text;
    css(label, {
        color: theme.colors.text1,
        display: 'inline-block',
        verticalAlign: 'sub',
        'line-height': theme.sizing.componentHeight
    });
    return label;
}
