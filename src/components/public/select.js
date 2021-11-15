import ComponentBase from "../component-base.js";

import "./select.css";

import { default as LabelPartial } from "../partials/label";

export default class Select extends ComponentBase {
    constructor (root, opts, theme) {
        super(root, opts, theme);

        var i, downTriangle, upTriangle, key, option, el, keys;

        this.label = LabelPartial(this.container, opts.label, theme);

        this.input = document.createElement("select");
        this.input.classList.add("guify-select-dropdown");
        // Add ARIA attribute to input based on label text
        if(opts.label) this.input.setAttribute("aria-label", opts.label);

        downTriangle = document.createElement("span");
        downTriangle.classList.add("guify-select-triangle", "guify-select-triangle--down");

        upTriangle = document.createElement("span");
        upTriangle.classList.add("guify-select-triangle", "guify-select-triangle--up");

        this.container.appendChild(downTriangle);
        this.container.appendChild(upTriangle);

        if (Array.isArray(opts.options)) {
            for (i = 0; i < opts.options.length; i++) {
                option = opts.options[i];
                el = document.createElement("option");
                el.value = el.textContent = option;
                if (opts.initial === option) {
                    el.selected = "selected";
                }
                this.input.appendChild(el);
            }
        } else {
            keys = Object.keys(opts.options);
            for (i = 0; i < keys.length; i++) {
                key = keys[i];
                el = document.createElement("option");
                el.value = key;
                if (opts.initial === key) {
                    el.selected = "selected";
                }
                el.textContent = opts.options[key];
                this.input.appendChild(el);
            }
        }

        this.container.appendChild(this.input);

        this.input.onchange = (data) => {
            this.emit("input", data.target.value);
        };

        // Style the arrows based on mouse / focus behavior (and unfocus on mouse leave).
        // I'd like to do this through CSS :focus/:hover selectors but I just couldn't figure it out.
        // It could be done easily if CSS had a "general previous sibling" selector.
        let StyleFocus = () => {
            downTriangle.classList.add("guify-select-triangle--down-highlight");
            upTriangle.classList.add("guify-select-triangle--up-highlight");
        };

        let StyleUnfocus = () => {
            downTriangle.classList.remove("guify-select-triangle--down-highlight");
            upTriangle.classList.remove("guify-select-triangle--up-highlight");
        };
        let focused = false;

        this.input.addEventListener("mouseover", StyleFocus);
        this.input.addEventListener("focus", () => { focused = true; StyleFocus(); });
        this.input.addEventListener("blur", () => { focused = false; StyleUnfocus(); });
        this.input.addEventListener("mouseleave", () => { if (!focused) StyleUnfocus(); });

    }

    SetValue(value) {
        this.input.value = value;
    }

    GetValue() {
        return this.input.value;
    }
}
