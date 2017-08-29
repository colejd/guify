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
        }

        // Make the menu collapse button
        let menuButton = this.element.appendChild(document.createElement('button'));
        menuButton.className = styles['guify-bar-button'];
        menuButton.innerHTML = 'Controls';
        css(menuButton, {
            left: opts.align == 'left' ? '0' : 'unset',
            right: opts.align == 'left' ? 'unset' : '0',
        })
        menuButton.onclick = () => {
            this.emit('ontogglepanel');
        }

    }

    SetVisible(show) {
        this.element.style.display = show ? 'block' : 'none';
    }

}
