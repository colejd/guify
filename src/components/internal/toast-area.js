import ComponentBase from "../component-base.js";

import css from "dom-css";

import { default as styles } from "../../styles/components/internal/toast-area-style.js";

/**
 * Represents a container div that creates and holds toast notifications.
 */
export class ToastArea extends ComponentBase {
    constructor(root, opts, theme) {
        super(root, opts, theme, false);

        this.styles = styles(theme);

        // Make toast area
        this.element = root.appendChild(document.createElement("div"));
        this.element.classList.add(this.styles["guify-toast-area"]);
        css(this.element, {
            position: "absolute",
            "width": "100%",
        });
    }

    /**
     * Makes a message that appears under the menu bar. Transitions out
     * over `transitionMS` milliseconds after `stayMS` milliseconds have passed.
     */
    CreateToast(message, stayMS = 5000, transitionMS = 0) {
        console.log("[Toast] " + message);

        let toast = this.element.appendChild(document.createElement("div"));
        toast.classList.add(this.styles["guify-toast-notification"]);
        toast.setAttribute("aria-live", "polite");

        toast.innerHTML = message;

        css(toast, {
            // Animation stuff
            // '-webkit-transition': 'opacity ' + transitionMS + 'ms linear',
            // 'transition': 'opacity ' + transitionMS + 'ms linear',
        });

        // Make close button in toast
        let closeButton = toast.appendChild(document.createElement("button"));
        closeButton.innerHTML = "&#10006;";
        closeButton.classList.add(this.styles["guify-toast-close-button"]);

        let timeout;

        let TransitionOut = () => {
            toast.blur();
            css(toast, {
                //'transform-style': 'flat',
                //'transform-style': 'preserve-3d',

                // Slide up
                // '-webkit-transition': '-webkit-transform ' + transitionMS + 'ms linear',
                // 'transition': 'transform ' + transitionMS + 'ms linear',
                // '-webkit-transform': 'translate3d(0, -100%, 0)',
                // 'transform:': 'translate3d(0, -100%, 0)',

                // Fade out
                //'-webkit-transition': '-webkit-opacity ' + transitionMS + 'ms linear',
                //'transition': 'opacity ' + transitionMS + 'ms linear',
                "opacity": "0",
            });
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                if(toast)
                    toast.parentNode.removeChild(toast);
            }, transitionMS);
        };

        timeout = setTimeout(TransitionOut, stayMS);

        closeButton.onclick = TransitionOut;
    }

}
