import EventEmitter from "wolfy87-eventemitter";
import { v4 as uuidv4 } from "uuid";

import { default as ContainerPartial } from "./partials/container";

export default class ComponentBase extends EventEmitter  {
    SetEnabled(enabled) {
        this.enabled = enabled;
        if (enabled) {
            this.container?.classList.remove("disabled");
        } else {
            this.container?.classList.add("disabled");
        }
    }

    Remove() {
        if (this.container) {
            this.container.parentNode.removeChild(this.container);
        }
    }

    constructor(root, opts, theme, makeContainer=true) {
        super();

        this.root = root;
        this.opts = opts;
        this.theme = theme;

        this.uuid = uuidv4();

        if (makeContainer) {
            this.container = ContainerPartial(root, opts.label, theme);
        }

        this.SetEnabled(opts.enabled || true);
    }
}