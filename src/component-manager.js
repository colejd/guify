import { v4 as uuidv4 } from 'uuid';

import { default as TitleComponent } from './components/title'
import { default as RangeComponent } from './components/range'
import { default as ButtonComponent } from './components/button'
import { default as CheckboxComponent } from './components/checkbox'
import { default as SelectComponent } from './components/select'
import { default as TextComponent } from './components/text'
import { default as ColorComponent } from './components/color'
import { default as FolderComponent } from './components/folder'
import { default as FileComponent } from './components/file'
import { default as DisplayComponent } from './components/display'
import { default as IntervalComponent } from './components/interval'

/**
 * Manages the loading and instantiation of Components.
 */
export class ComponentManager {
    constructor(theme) {
        this.theme = theme
        this.components = {
            'title': TitleComponent,
            'range': RangeComponent,
            'button': ButtonComponent,
            'checkbox': CheckboxComponent,
            'select': SelectComponent,
            'text': TextComponent,
            'color': ColorComponent,
            'folder': FolderComponent,
            'file': FileComponent,
            'display': DisplayComponent,
            'interval': IntervalComponent,
        }

    }

    /**
     * Creates the component specified by `opts` and appends it to the
     * document as a child of `root`.
     *
     * @param {HTMLElement} [root] Parent of the created component
     * @param {Object} [opts] Options used to create the component
     */
    Create(root, opts) {
        if(this.components[opts.type] === undefined) {
            throw new Error(`No component type named '${opts.type}' exists.`);
        }

        let newComponent = new this.components[opts.type](root, opts, this.theme, uuidv4());

        Object.assign(newComponent, {
            Remove: function() {
                this.container.parentNode.removeChild(this.container);
            }
        });

        return newComponent;
    }



}
