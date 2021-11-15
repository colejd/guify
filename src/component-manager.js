import { default as TitleComponent } from "./components/public/title";
import { default as RangeComponent } from "./components/public/range";
import { default as ButtonComponent } from "./components/public/button";
import { default as CheckboxComponent } from "./components/public/checkbox";
import { default as SelectComponent } from "./components/public/select";
import { default as TextComponent } from "./components/public/text";
import { default as ColorComponent } from "./components/public/color";
import { default as FolderComponent } from "./components/public/folder";
import { default as FileComponent } from "./components/public/file";
import { default as DisplayComponent } from "./components/public/display";
import { default as IntervalComponent } from "./components/public/interval";

/**
 * Manages the loading and instantiation of Components.
 */
export class ComponentManager {
    constructor(theme) {
        this.theme = theme;
        this.components = {
            "title": TitleComponent,
            "range": RangeComponent,
            "button": ButtonComponent,
            "checkbox": CheckboxComponent,
            "select": SelectComponent,
            "text": TextComponent,
            "color": ColorComponent,
            "folder": FolderComponent,
            "file": FileComponent,
            "display": DisplayComponent,
            "interval": IntervalComponent,
        };

    }

    /**
     * Creates the component specified by `opts` and appends it to the
     * document as a child of `root`.
     *
     * @param {HTMLElement} [root] Parent of the created component
     * @param {Object} [opts] Options used to create the component
     */
    Create(root, opts) {
        let initializer = this.components[opts.type];
        if(initializer === undefined) {
            throw new Error(`No component type named '${opts.type}' exists.`);
        }

        let newComponent = new initializer(root, opts, this.theme);

        return newComponent;
    }



}
