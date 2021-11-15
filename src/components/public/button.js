import ComponentBase from "../component-base.js";

import { default as LabelPartial } from "../partials/label";

import "./button.css";

export default class Button extends ComponentBase {
    constructor(root, opts, theme) {
        super(root, opts, theme);

        this.label = LabelPartial(this.container, "", theme);

        this.input = this.container.appendChild(document.createElement("button"));
        this.input.classList.add("guify-button");

        this.input.textContent = opts.label;
        this.button = this.input;

        this.input.addEventListener("click", opts.action);

        // Defocus on mouse up (for non-accessibility users)
        this.input.addEventListener("mouseup", () => {
            this.input.blur();
        });
    }
}
