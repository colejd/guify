import css from 'dom-css';

export class Panel {
    constructor(root, opts) {

        // Add panel styles to the head
        this.styles = require('./styles/panel-style.js');

        // Create panel
        this.element = root.appendChild(document.createElement('div'));
        this.element.className = this.styles['guify-panel'];
        css(this.element, {
            background: opts.theme.colors.background1,
            width: opts.width,
            opacity: opts.opacity || 1.0,
            left: opts.align == 'left' ? '0px' : 'unset',
            right: opts.align == 'left' ? 'unset' : '0px',
            transition: 'height 0.3s ease, margin 0.3s ease',
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
            this.element.classList.remove(this.styles['guify-panel-hidden']);
        }
        else {
            // this.panel.style.height = '0px';
            // this.panel.style.paddingTop = '0px';
            // this.panel.style.paddingBottom = '0px';
            this.element.classList.add(this.styles['guify-panel-hidden']);
        }
    }

    /**
     * Toggles the visibility of the panel.
     */
    ToggleVisible() {
        if (this.element.classList.contains(this.styles['guify-panel-hidden']))
            this.SetVisible(true);
        else
            this.SetVisible(false);
    }

}
