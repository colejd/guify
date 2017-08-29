import css from 'dom-css';
import { theme } from './theme';

export class Panel {
    constructor(root, opts) {
        this.opts = opts;

        // Add styles to the head
        this.styles = require('./styles/panel-style.js');

        // Container the panel will sit in
        this.container = root.appendChild(document.createElement('div'));
        this.container.className = this.styles['guify-panel-container'];
        css(this.container, {
            width: opts.width,
            opacity: opts.opacity || 1.0,
            left: opts.align == 'left' ? '0' : 'unset',
            right: opts.align == 'left' ? 'unset' : '0',
        });

        if(opts.panelMode == 'outer') {
            css(this.container, {
                left: opts.align == 'left' ? 'unset' : '100%',
                right: opts.align == 'left' ? '100%' : 'unset',
            })
        }

        if(opts.barMode === 'none') {
            this._MakeToggleButton();
        }

        // Create panel inside container
        this.panel = this.container.appendChild(document.createElement('div'));
        this.panel.className = this.styles['guify-panel'];

        // Add a title to the panel
        if(opts.barMode === 'none' && opts.title)
            require('./components/partials/header')(this.panel, opts.title, theme);

    }

    /**
     * Makes the panel visible based on the truthiness of `show`.
     * @param {Bool} [show]
     */
    SetVisible(show) {
        if(show){
            // this.panel.style.height = Array.prototype.reduce.call(this.panel.childNodes, function(p, c) {return p + (c.offsetHeight || 0) + 5 + 1;}, 0) + 'px';
            // this.panel.style.paddingTop = '14px';
            // this.panel.style.paddingBottom = '8px';
            this.panel.classList.remove(this.styles['guify-panel-hidden']);

            if(this.menuButton) this.menuButton.setAttribute('alt', 'Close GUI');

        }
        else {
            // this.panel.style.height = '0px';
            // this.panel.style.paddingTop = '0px';
            // this.panel.style.paddingBottom = '0px';
            this.panel.classList.add(this.styles['guify-panel-hidden']);

            if(this.menuButton) this.menuButton.setAttribute('alt', 'Open GUI');

        }
    }

    /**
     * Toggles the visibility of the panel.
     */
    ToggleVisible() {
        if (this.panel.classList.contains(this.styles['guify-panel-hidden']))
            this.SetVisible(true);
        else
            this.SetVisible(false);
    }

    /**
     * Makes a show/hide button that sits at the bottom of the panel.
     */
    _MakeToggleButton() {
        // Make the menu collapse button
        this.menuButton = this.container.appendChild(document.createElement('button'));
        this.menuButton.className = this.styles['guify-panel-toggle-button'];
        css(this.menuButton, {
            left: this.opts.align == 'left' ? '0px' : 'unset',
            right: this.opts.align == 'left' ? 'unset' : '0px',
        });

        this.menuButton.onclick = () => {
            this.ToggleVisible();
        }

        // Defocus on mouse up (for non-accessibility users)
        this.menuButton.addEventListener('mouseup', () => {
            this.menuButton.blur();
        });

        this.menuButton.innerHTML = `
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect x="10%" y="10%" width="80%" height="80%"/>
        </svg>
        `;
    }

}
