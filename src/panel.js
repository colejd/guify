import css from 'dom-css';

import styles from './scss/panel.scss';

export class Panel {
    constructor(root, opts) {
        // Create panel
        this.element = root.appendChild(document.createElement('div'));
        this.element.className = 'guify-panel';
        css(this.element, {
            background: opts.theme.background1,
            width: opts.width,
            opacity: opts.opacity || 1.0,
            left: opts.align == 'left' ? '0px' : 'unset',
            right: opts.align == 'left' ? 'unset' : '0px',
            transition: 'height 0.3s ease, margin 0.3s ease',
            overflow: 'hidden',
        });

        if (opts.title && opts.barMode === 'none')
            require('./components/partials/header')(this.element, opts.title, opts.theme)

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
            this.element.classList.remove('guify-panel-hidden');
        }
        else {
            // this.panel.style.height = '0px';
            // this.panel.style.paddingTop = '0px';
            // this.panel.style.paddingBottom = '0px';
            this.element.classList.add('guify-panel-hidden');
        }
    }

    /**
     * Toggles the visibility of the panel.
     */
    ToggleVisible() {
        if (this.element.classList.contains('guify-panel-hidden'))
            this.SetVisible(true);
        else
            this.SetVisible(false);
    }

}
