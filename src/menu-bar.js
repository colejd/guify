import css from 'dom-css';
import EventEmitter from 'wolfy87-eventemitter';

import styles from './scss/menu-bar.scss';

export class MenuBar extends EventEmitter {
    constructor(root, opts) {
        super();

        // Create menu bar
        this.element = document.createElement('div');
        this.element.className = 'guify-bar';
        root.appendChild(this.element);

        css(this.element, {
            background: opts.theme.background1
        })

        if (opts.title) {
            // Create a text label inside of the bar
            let text = this.element.appendChild(document.createElement('div'));
            text.className = 'guify-bar-title';
            text.innerHTML = opts.title;
            css(text, {
                'color': opts.theme.text1
            })
        }

        // Make the menu collapse button
        let menuButton = this.element.appendChild(document.createElement('button'));
        menuButton.className = 'guify-bar-button';
        menuButton.innerHTML = 'Controls';
        css(menuButton, {
            left: opts.align == 'left' ? '8px' : 'unset',
            right: opts.align == 'left' ? 'unset' : '8px',
        })
        menuButton.onclick = () => {
            //this.TogglePanelVisible();
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
