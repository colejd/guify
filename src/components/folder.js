import css from 'dom-css';

const styles = require('styles/components/folder-style.js');

export default class Folder {
    constructor (root, opts, theme, uuid) {
        this.opts = opts;

        var container = require('./partials/container')(root, opts.label, theme);
        container.classList.add(styles['guify-folder']);
        container.setAttribute('role', 'button');
        container.setAttribute('tabIndex', '0'); // Make tabbable
        // css(container, {
        //     color: theme.colors.text1,
        // })

        this.arrow = container.appendChild(document.createElement('div'));
        this.arrow.innerHTML = '&#9662;';
        css(this.arrow, {
            'width': '1.5em',
        });

        this.label = container.appendChild(document.createElement('div'));
        this.label.innerHTML = opts.label;

        container.onclick = () => {
            this.Toggle();
        }

        // Defocus on mouse up (for non-accessibility users)
        container.addEventListener('mouseup', () => {
            container.blur();
        });

        container.addEventListener('keydown', (e) => {
            // Listen for Space or Enter
            if(e.which === 13 || e.which === 32) {
                this.Toggle();
            }
        });

        this.folderContainer = root.appendChild(document.createElement('div'));
        this.folderContainer.classList.add(styles['guify-folder-contents']);

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
            this.folderContainer.classList.remove(styles['guify-folder-closed']);
            this.arrow.innerHTML = '&#9662;'; // Down triangle

        }
        else {
            this.folderContainer.classList.add(styles['guify-folder-closed']);
            this.arrow.innerHTML = '&#9656;'; // Right triangle
        }

    }
}
