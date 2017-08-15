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
        opts.theme = isstring(opts.theme) ? themes[opts.theme] : themes.dark;
        opts.root = opts.root || document.body;
        opts.align = (opts.align || 'right').toLowerCase(); // Can be 'left' or 'right'
        opts.opacity = opts.opacity || 1.0;
        opts.useMenuBar = opts.useMenuBar || false;
        opts.barMode = (opts.barMode || 'overlay').toLowerCase(); // Can be 'above', 'offset', or 'overlay'

        this.styling = {
            barHeight: 36
        }

        this.uuid = uuid();

        this._LoadStyles();
        this._ConstructElements();

        this.components = {
            'title': require('./components/title'),
            'range': require('./components/range'),
            'button': require('./components/button'),
            'checkbox': require('./components/checkbox'),
            'select': require('./components/select'),
            'text': require('./components/text'),
            'color': require('./components/color'),
            'folder': require('./components/folder'),
            'file': require('./components/file'),
            'display': require('./components/display')
        }

        this.loadedComponents = [];

        // Begin component update loop
        this._UpdateComponents();

    }

    /**
     * Load any runtime styling information needed here.
     */
    _LoadStyles() {
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
    _ConstructElements() {
        // Create the container that all the other elements will be contained within
        this.container = document.createElement('div');
        this.container.id = 'guify'; // Throw on a unique ID for extra specificity
        this.container.classList.add('reset');
        this.container.classList.add('guify-container');
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

    _UpdateComponents() {
        this.loadedComponents.forEach((component) => {
            if(component.binding) {
                // Update the component from its bound value
                component.SetValue(component.binding.object[component.binding.property]);
            }
        });

        setTimeout(() => {
            window.requestAnimationFrame(() => {
                this._UpdateComponents();
            });
        }, 100);

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
     * Creates a new component in the panel based on the provided options.
     * @param {*} [obj] Either an opts object or an array of opts objects
     * @param {Object} [applyToAll] Each property of this object will be applied to all opts objects
     */
    Register(obj, applyToAll = {}) {
        if (Array.isArray(obj)) {
            obj.forEach((item) => {
                let merged = Object.assign(item, applyToAll);
                this._Register(merged);
            });
        }
        else {
            let merged = Object.assign(obj, applyToAll);
            this._Register(merged);
        }
    }

    /**
     * Creates new component in the panel based on the options provided.
     *
     * @param {Object} [opts] Options for the component
     */
    _Register(opts) {

        if (opts.object && opts.property)
            if (opts.object[opts.property] === undefined)
                throw new Error(`Object ${opts.object} has no property '${opts.property}'`);

        // Set opts properties from the input
        if(opts.object && opts.property) {
            opts.initial = opts.object[opts.property];
            // If no label is specified, generate it from property name
            //opts.label = opts.label || property;
        }

        if(this.components[opts.type] === undefined) {
            throw new Error(`No component type named '${opts.type}' exists.`)
        }

        let root = this.panel;

        // If a folder was specified, try to find a folder component with that name
        // and get its folderContainer.
        if(opts.folder) {
            let folderComp = this.loadedComponents.find((cmp) => {
                return cmp.opts.type === 'folder' && cmp.opts.label === opts.folder;
            });

            if(folderComp) root = folderComp.folderContainer;
            else throw new Error(`No folder exists with the name ${opts.folder}`);
        }

        let component = new this.components[opts.type](root, opts, this.opts.theme, this.uuid);

        // Add binding properties if specified
        if(opts.object && opts.property) {
            component['binding'] = { object: opts.object, property: opts.property };
        }

        // If the component has events, add listeners for those events.
        if(component.on) {
            component.on('initialized', function (data) {
                if(opts.onInitialize)
                    opts.onInitialize(data);
            });

            component.on('input', (data) => {
                if(opts.object && opts.property)
                    opts.object[opts.property] = data;

                if(opts.onChange) {
                    opts.onChange(data);
                }
            });
        }

        this.loadedComponents.push(component);


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
            right: '8px',
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
