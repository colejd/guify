import css from 'dom-css';

let Container = (root, label, theme) => {
    let container = root.appendChild(document.createElement('div'));
    container.classList.add('guify-component-container');
    css(container, {
        position: 'relative',
        'min-height': theme.sizing.componentHeight,
        'margin-bottom': theme.sizing.componentSpacing
    });
    return container;
}

export default Container;
