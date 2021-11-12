import ComponentBase from "./component-base.js";

import { default as styles } from "styles/components/button-style.js";

import { default as ContainerPartial } from "./partials/container";
import { default as LabelPartial } from "./partials/label";

export default class Button extends ComponentBase {
constructor(root, opts, theme) {
    super(root, opts, theme);

    this.styles = styles(theme);

    this.container = ContainerPartial(root, opts.label, theme);
    this.label = LabelPartial(this.container, "", theme);

    var input = this.container.appendChild(document.createElement("button"));
    input.className = this.styles["guify-button"];

    input.textContent = opts.label;
    this.button = input;

    input.addEventListener("click", opts.action);

    // Defocus on mouse up (for non-accessibility users)
    input.addEventListener("mouseup", () => {
        input.blur();
    });
}
}
