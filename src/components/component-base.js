import EventEmitter from "wolfy87-eventemitter";
import css from "dom-css";
import { v4 as uuidv4 } from "uuid";

import { default as ContainerPartial } from "./partials/container";

export default class ComponentBase extends EventEmitter  {
    constructor(root, opts, theme, makeContainer=true) {
        super();

        this.root = root;
        this.opts = opts;
        this.theme = theme;

        this.uuid = uuidv4();

        if (makeContainer) {
            this.container = ContainerPartial(root, opts.label, theme);
        }
    }

    SetEnabled(enabled) {
        if (enabled) {
            this.container.classList.remove("disabled");
        } else {
            this.container.classList.add("disabled");
        }
    }

    Remove() {
        this.container.parentNode.removeChild(this.container);
    }
}