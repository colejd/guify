import css from 'dom-css';
import { theme } from './theme';

/**
 * Represents a container div that creates and holds toast notifications.
 */
export class ToastArea {
    constructor(root, opts) {
        this.opts = opts;

        // Add toast area styles to the head
        this.styles = require('./styles/toast-area-style.js');

        // Make toast area
        this.element = root.appendChild(document.createElement('div'));
        this.element.classList.add(this.styles['guify-toast-area']);
        css(this.element, {
            position: 'absolute',
            'width': '100%',
        });
    }

    /**
     * Makes a message that appears under the menu bar. Transitions out
     * over `transitionMS` milliseconds after `stayMS` milliseconds have passed.
     */
    CreateToast(message, stayMS = 5000, transitionMS = 100) {
        console.log('[Toast] ' + message);

        let toast = this.element.appendChild(document.createElement('div'));
        toast.classList.add(this.styles['guify-toast-notification']);
        toast.setAttribute('aria-live', 'polite');

        css(toast, {
            'box-sizing': 'border-box',
            //'background-color': theme.background2,
            'color': theme.colors.text1,
            'position': 'relative',
            'width': '100%',
            //'height': '20px',
            'padding': '8px',
            'padding-left': '20px',
            'padding-right': '20px',
            'text-align': 'center',
            'font-family': `Hack', monospace`,
            'font-size': '11px',

            // Animation stuff
            // '-webkit-transition': 'opacity ' + transitionMS + 'ms linear',
            // 'transition': 'opacity ' + transitionMS + 'ms linear',
        });

        toast.innerHTML = message;

        // Make close button in toast
        let closeButton = toast.appendChild(document.createElement('button'));
        closeButton.innerHTML = '&#10006;'
        css(closeButton, {
            background: 'rgba(0, 0, 0, 0)',
            'color': theme.colors.text1,
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
