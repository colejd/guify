import ComponentBase from "./component-base.js";

import css from "dom-css";

import { default as LabelPartial } from "./partials/label";

/**
 * Display component. Shows the state of a variable.
 */
export default class Display extends ComponentBase {
    constructor (root, opts, theme) {
        super(root, opts, theme);

        this.label = LabelPartial(this.container, opts.label, theme);

        this.text = this.container.appendChild(document.createElement("div"));
        css(this.text, {
            display: "inline-block",
            height: "unset",
            width: `calc(100% - ${theme.sizing.labelWidth})`,
            border: "none",
            //background: theme.background2,
            color: theme.colors.textSecondary,
            fontFamily: "inherit",
            "box-sizing": "border-box",
            "-moz-box-sizing": "border-box",
            "-webkit-box-sizing": "border-box",
            verticalAlign: "sub",
            "line-height": theme.sizing.componentHeight,
            "user-select": "text"
        });

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
