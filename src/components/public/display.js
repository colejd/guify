import ComponentBase from "../component-base.js";

import "./display.css";

import { default as LabelPartial } from "../partials/label";

/**
 * Display component. Shows the state of a variable.
 */
export default class Display extends ComponentBase {
    constructor (root, opts, theme) {
        super(root, opts, theme);

        this.label = LabelPartial(this.container, opts.label, theme);

        this.text = this.container.appendChild(document.createElement("div"));
        this.text.classList.add("guify-display");

        if (opts.initial) {
            this.SetValue(opts.initial);
        }

        // Add ARIA attribute to text based on label text
        if(opts.label) this.text.setAttribute("aria-label", opts.label);
    }

    SetValue(value) {
        this.text.innerHTML = value.toString();
    }

    GetValue() {
        return this.text.innerHTML.toString();
    }
}
