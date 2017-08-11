let uuid = require('uuid/v4');
let css = require('dom-css');
let isstring = require('is-string');

var themes = require('./themes');
import styles from './scss/container.scss';


export default class GUI {
    constructor(opts) {
        this.opts = opts;

        this.hasRoot = opts.root !== undefined;

        opts = opts || {};
        opts.width = opts.width || 300;
        opts.theme = typeof opts.theme === 'string' ? themes[opts.theme] : themes.dark;
        opts.root = opts.root || document.body;
        opts.align = opts.align.toLowerCase() || 'right'; // Can be 'left' or 'right'
        opts.opacity = opts.opacity || 1.0;
        opts.useMenuBar = opts.useMenuBar || false;
        opts.barMode = opts.barMode.toLowerCase() || 'overlay'; // Can be 'above', 'offset', or 'overlay'

        this.styling = {
            barHeight: 36
        }

        this.uuid = uuid();

        this.LoadStyles();
        this.ConstructElements();

        require('./components/title')(this.panel, { label: 'Test Title' }, opts.theme);
        require('./components/title')(this.panel, { label: 'Test Title 2: Electric Boogaloo' }, opts.theme);

        this.components = {
            'range': require('./components/range'),
            'button': require('./components/button'),
            'checkbox': require('./components/checkbox'),
            'select': require('./components/select'),
            'text': require('./components/text'),
            'color': require('./components/color'),
        }

        //this.SetPanelVisible(false);

    }

    /**
     * Load any runtime styling information needed here.
     */
    LoadStyles() {
        // Load the font we'll be using and append it to the head
        var elem = document.createElement('style');
        elem.setAttribute('type', 'text/css');
        elem.setAttribute('rel', 'stylesheet');
        elem.setAttribute('href', '//cdn.jsdelivr.net/font-hack/2.019/css/hack.min.css');
        document.getElementsByTagName('head')[0].appendChild(elem);
    }

    /**
     * Create container, bar, panel, and toastContainer
     */
    ConstructElements() {
        // Create the container that all the other elements will be contained within
        this.container = document.createElement('div');
        this.container.id = 'guify'; // Throw on a unique ID for extra specificity
        this.container.className = 'guify-container'
        css(this.container, {
            top: this.opts.barMode == 'above' && this.hasRoot ? '-36px' : '0',
        });
        this.opts.root.appendChild(this.container);

        // Create menu bar
        this.bar = document.createElement('div');
        this.bar.className = 'guify-bar';
        this.container.appendChild(this.bar);

        css(this.bar, {
            background: this.opts.theme.background1
        })

        if (this.opts.title) {
            // Create a text label inside of the bar
            let text = this.bar.appendChild(document.createElement('div'));
            text.className = 'guify-bar-title';
            text.innerHTML = this.opts.title;
            css(text, {
                'color': this.opts.theme.text1
            })
        }

        // Make the menu collapse button
        let menuButton = this.bar.appendChild(document.createElement('button'));
        menuButton.className = 'guify-bar-button';
        menuButton.innerHTML = 'Controls';
        css(menuButton, {
            left: this.opts.align == 'left' ? '8px' : 'unset',
            right: this.opts.align == 'left' ? 'unset' : '8px',
        })
        menuButton.onclick = () => {
            this.TogglePanelVisible();
        }

        if (this.opts.barMode == 'offset') {
            // Make a div that will be the size of the bar and make it first in the container
            this.opts.root.style.height = this.opts.root.offsetHeight + this.bar.offsetHeight + 'px';
            let offsetDiv = document.createElement('div');
            offsetDiv.style.width = '100%';
            offsetDiv.style.height = this.bar.offsetHeight;
            this.opts.root.insertBefore(offsetDiv, this.opts.root.childNodes[0]);
        }

        // Create panel
        this.panel = this.container.appendChild(document.createElement('div'));
        this.panel.className = 'guify-panel';
        css(this.panel, {
            background: this.opts.theme.background1,
            width: this.opts.width,
            opacity: this.opts.opacity || 1.0,
            left: this.opts.align == 'left' ? '0px' : 'unset',
            right: this.opts.align == 'left' ? 'unset' : '0px',
        });

        if (this.opts.title && !this.opts.useMenuBar)
            require('./components/partials/header')(this.panel, this.opts.title, this.opts.theme)


        if(this.opts.useMenuBar) {
            this.SetPanelVisible(false);
        } else {
            this.bar.style.display = 'none';
            this.SetPanelVisible(true);
        }

        // Make toast area
        this.toastContainer = this.container.appendChild(document.createElement('div'));
        css(this.toastContainer, {
            position: 'absolute',
            'width': '100%',
        })

    }

    /**
     * Makes the panel visible based on the truthiness of `show`.
     * @param {Bool} [show]
     */
    SetPanelVisible(show) {
        if(show)
            this.panel.style.display = 'block';
        else
            this.panel.style.display = 'none';
    }

    /**
     * Toggles the visibility of the panel.
     */
    TogglePanelVisible() {
        if(this.panel.style.display != 'none')
            this.SetPanelVisible(false);
        else
            this.SetPanelVisible(true);
    }

    /**
     * Creates new component in the panel based on the options provided.
     * `object[property]` is bound to the state of the component.
     *
     * @param {Object} [object] The object that holds the inspected property
     * @param {String} [property] The name of the inspected property
     * @param {Object} [opts] Options for the GUI
     */
    RegisterVariable(object, property, opts) {

        if(!isstring(property) && property != null)
            throw new Error('Supplied property must be a string.');

        if (object && property)
            if (object[property] === undefined)
                throw new Error(`Object ${object} has no property '${property}'`);

        // Set opts properties from the input
        if(object && property) {
            opts.initial = object[property];
            //opts.label = opts.label || property;
        }

        if(this.components[opts.type] === undefined) {
            throw new Error(`No component type named '${opts.type}' exists.`)
        }
        let component = new this.components[opts.type](this.panel, opts, this.opts.theme, this.uuid);

        component.on('initialized', function (data) {
            if(opts.onInitialize)
                opts.onInitialize(data);
        })

        component.on('input', (data) => {
            if(object && property)
                object[property] = data;

            if(opts.onChange) {
                opts.onChange(data);
            }
        })


    }

    /**
     * Creates new component in the panel based on the options provided.
     * Useful if you don't need to bind the component to a variable.
     *
     * @param {Object} [opts] Options for the GUI
     */
    Register(opts) {
        this.RegisterVariable(null, null, opts);
    }

    /**
     * Makes a message that appears under the menu bar. Transitions out
     * over `transitionMS` milliseconds after `stayMS` milliseconds have passed.
     */
    Toast(message, stayMS = 5000, transitionMS = 100) {
        console.log('[Toast] ' + message);

        var toast = this.toastContainer.appendChild(document.createElement('div'));
        //toast.zIndex = this.container.zIndex - 1;

        css(toast, {
            'box-sizing': 'border-box',
            'background-color': this.opts.theme.background2,
            'color': this.opts.theme.text1,
            'position': 'relative',
            'width': '100%',
            //'height': '20px',
            'padding': '8px',
            'padding-left': '20px',
            'padding-right': '20px',
            'text-align': 'center',
            'font-family': `Hack', monospace`,
            'font-size': '11px',
            'z-index': this.container.zIndex - 100,

            // Animation stuff
            // '-webkit-transition': 'opacity ' + transitionMS + 'ms linear',
            // 'transition': 'opacity ' + transitionMS + 'ms linear',
        });

        toast.innerHTML = message;

        // Make close button in toast
        var closeButton = toast.appendChild(document.createElement('button'));
        closeButton.innerHTML = '&#10006;'
        css(closeButton, {
            background: 'rgba(0, 0, 0, 0)',
            'color': this.opts.theme.text1,
            position: 'absolute',
            textAlign: 'center',
            'margin-top': 'auto',
            'margin-bottom': 'auto',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'inherit',
            top: '0',
            bottom: '0',
            left: this.opts.align == 'left' ? '8px' : 'unset',
            right: this.opts.align == 'left' ? 'unset' : '8px',
        })

        let timeout;

        let TransitionOut = () => {
            css(toast, {
                //'transform-style': 'flat',
                //'transform-style': 'preserve-3d',

                // Slide up
                // '-webkit-transition': '-webkit-transform ' + transitionMS + 'ms linear',
                // 'transition': 'transform ' + transitionMS + 'ms linear',
                // '-webkit-transform': 'translate3d(0, -100%, 0)',
                // 'transform:': 'translate3d(0, -100%, 0)',

                // Fade out
                '-webkit-transition': '-webkit-opacity ' + transitionMS + 'ms linear',
                'transition': 'opacity ' + transitionMS + 'ms linear',
                'opacity': '0',
            });
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                if(toast)
                    toast.parentNode.removeChild(toast);
            }, transitionMS);
        }

        timeout = setTimeout(TransitionOut, stayMS);

        closeButton.onclick = TransitionOut;

    }



}
