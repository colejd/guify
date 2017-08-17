import css from 'dom-css';
import EventEmitter from 'wolfy87-eventemitter';
import { theme } from './theme';

export class MenuBar extends EventEmitter {
    constructor(root, opts) {
        super();

        // Add menu bar styles to the head
        const styles = require('./styles/menu-bar-style.js');

        // Create menu bar
        this.element = document.createElement('div');
        this.element.className = styles['guify-bar'];
        root.appendChild(this.element);

        if (opts.title) {
            // Create a text label inside of the bar
            let text = this.element.appendChild(document.createElement('div'));
            text.className = styles['guify-bar-title'];
            text.innerHTML = opts.title;
            css(text, {
                'color': theme.colors.text1
            })
        }

        // Make the menu collapse button
        let menuButton = this.element.appendChild(document.createElement('button'));
        menuButton.className = styles['guify-bar-button'];
        menuButton.innerHTML = 'Controls';
        css(menuButton, {
            left: opts.align == 'left' ? '8px' : 'unset',
            right: opts.align == 'left' ? 'unset' : '8px',
        })
        menuButton.onclick = () => {
            this.emit('ontogglepanel');
        }


        if(opts.barMode == 'offset') {
            // Make an empty div that will be the size of the bar and make it first in the root
            opts.root.style.height = opts.root.offsetHeight + this.element.offsetHeight + 'px';
            let offsetDiv = document.createElement('div');
            offsetDiv.style.width = '100%';
            offsetDiv.style.height = this.element.offsetHeight;
            opts.root.insertBefore(offsetDiv, opts.root.childNodes[0]);
        }
    }

    SetVisible(show) {
        this.element.style.display = show ? 'block' : 'none';
    }

}
