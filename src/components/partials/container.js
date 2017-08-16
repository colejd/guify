import css from 'dom-css';

let Container = (root, label) => {
    let container = root.appendChild(document.createElement('div'));
    container.classList.add('guify-component-container');
    css(container, {
        position: 'relative',
        'min-height': '20px',
        'margin-bottom': '5px'
    });
    return container;
}

export default Container;
