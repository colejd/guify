import EventEmitter from "wolfy87-eventemitter";
import { v4 as uuidv4 } from "uuid";

export default class ComponentBase extends EventEmitter  {
    constructor(root, opts, theme) {
        super();

        this.root = root;
        this.opts = opts;
        this.theme = theme;

        this.uuid = uuidv4();
    }

    SetEnabled(enabled) { }

    Remove() {
        this.container.parentNode.removeChild(this.container);
    }
}