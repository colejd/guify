import ComponentBase from "../component-base.js";

import "./title.css";

export default class Title extends ComponentBase {
    constructor (root, opts, theme) {
        super(root, opts, theme);

        var background = this.container.appendChild(document.createElement("div"));
        background.classList.add("guify-title");

        var label = background.appendChild(document.createElement("div"));
        label.classList.add("guify-title-text");
        label.innerHTML = `&#9632; ${opts.label} &#9632;`;
    }
}
