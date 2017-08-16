let css = require('dom-css');

import styles from 'scss/components/folder.scss';

export default class Folder {
    constructor (root, opts, theme, uuid) {
        this.opts = opts;

        var container = require('./partials/container')(root, opts.label);
        container.classList.add('guify-folder');
        container.setAttribute('role', 'button');
        container.setAttribute('tabIndex', '0'); // Make tabbable
        css(container, {
            color: theme.text1,
        })

        this.arrow = container.appendChild(document.createElement('div'));
        this.arrow.innerHTML = '&#9662;';
        css(this.arrow, {
            'width': '5%',
        });

        this.label = container.appendChild(document.createElement('div'));
        this.label.innerHTML = opts.label;

        container.onclick = () => {
            this.Toggle();
        }

        container.addEventListener('keydown', (e) => {
            // Listen for Space or Enter
            if(e.which === 13 || e.which === 32) {
                this.Toggle();
            }
        });

        this.folderContainer = root.appendChild(document.createElement('div'));
        this.folderContainer.classList.add('guify-folder-contents');

        this.open = this.opts.open || false;
        this.SetOpen(this.open);


    }

    // Toggle visibility
    Toggle() {
        this.open = !this.open;
        this.SetOpen(this.open);
    }

    // Show or hide the contents
    SetOpen(show) {
        this.open = show;
        if(show) {
            this.folderContainer.classList.remove('guify-folder-closed');
            this.arrow.innerHTML = '&#9662;'; // Down triangle

        }
        else {
            this.folderContainer.classList.add('guify-folder-closed');
            this.arrow.innerHTML = '&#9656;'; // Right triangle
        }

    }
}
