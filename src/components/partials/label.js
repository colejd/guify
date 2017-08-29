import css from 'dom-css';

export default (root, text, theme) => {
    var background = root.appendChild(document.createElement('div'));
    css(background, {
        left: 0,
        width: `calc(${theme.sizing.labelWidth} - 2%)`,
        display: 'inline-block',
        'margin-right': '2%',
        verticalAlign: 'top'
    });

    var label = background.appendChild(document.createElement('div'));
    label.innerHTML = text;
    css(label, {
        color: theme.colors.textPrimary,
        display: 'inline-block',
        verticalAlign: 'sub',
        'min-height': theme.sizing.componentHeight,
        'line-height': theme.sizing.componentHeight
    });
    return label;
}
