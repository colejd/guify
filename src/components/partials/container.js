let paramCase = require('param-case');
let css = require('dom-css');

let Container = (root, label) => {
    let container = root.appendChild(document.createElement('div'));
    //container.id = 'guify-' + paramCase(label);
    container.classList.add('guify-component-container');
    css(container, {
        position: 'relative',
        height: '25px'
    });
    return container;
}

export default Container;
