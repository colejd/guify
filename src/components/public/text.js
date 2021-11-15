import ComponentBase from "../component-base.js";

import "./text.css";

import { default as LabelPartial } from "../partials/label";

export default class Text extends ComponentBase {
    static #supportedInputListenModes = ["input", "change"];

    constructor (root, opts, theme) {
        super(root, opts, theme);

        this.listenMode = opts.listenMode || "input";
        if (!Text.#supportedInputListenModes.includes(this.listenMode)) {
            console.error(`listenMode "${this.listenMode}" is not supported for text component "${opts.label}"! Falling back on "input".`);
        }

        this.label = LabelPartial(this.container, opts.label, theme);

        this.input = this.container.appendChild(document.createElement("input"));
        this.input.type = "text";
        this.input.classList.add("guify-text-input");
        if (opts.initial) this.input.value = opts.initial;
        // Add ARIA attribute to input based on label text
        if(opts.label) this.input.setAttribute("aria-label", opts.label);

        setTimeout(() => {
            this.emit("initialized", this.input.value);
        });

        this.input.addEventListener(this.listenMode, (data) => {
            console.log(data);
            this.emit("input", data.target.value);
        });

        // Gain focus
        this.input.addEventListener("focus", () => {
            this.focused = true;
        });

        // Lose focus
        this.input.addEventListener("blur", () => {
            this.focused = false;
        });
    }

    SetValue(value) {
        if(this.focused !== true)
            this.input.value = value;
    }

    GetValue() {
        return this.input.value;
    }
}
