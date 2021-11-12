import css from "dom-css";

import { default as ContainerPartial } from "./partials/container";

export default class Title {
    constructor (root, opts, theme) {
        this.opts = opts;

        this.container = ContainerPartial(root, opts.label, theme);
        css(this.container, {
            //'font-size': '13px'
        });

        var background = this.container.appendChild(document.createElement("div"));
        css(background, {
            "box-sizing": "border-box",
            width: "100%",
            display: "inline-block",
            height: theme.sizing.componentHeight,
            verticalAlign: "top",
        });

        var label = background.appendChild(document.createElement("div"));
        label.innerHTML = `&#9632; ${opts.label} &#9632;`;
        css(label, {
            //color: theme.text1,
            display: "inline-block",
            verticalAlign: "sub",
            height: theme.sizing.componentHeight,
            "line-height": theme.sizing.componentHeight,
            //'box-shadow': `inset 0 0 0 1px ${theme.background2}`,
            "padding-left": "5px",
            "padding-right": "5px",
            //"font-weight": "bold",
            "background-color": theme.colors.textPrimary,
            "color": theme.colors.panelBackground
        });
    }
}
