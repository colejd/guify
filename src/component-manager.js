import uuid from 'uuid/v4';
import { theme } from './theme';

/**
 * Manages the loading and instantiation of Components.
 */
export class ComponentManager {
    constructor() {
        this.uuid = uuid();

        this.components = {
            'title': require('./components/title'),
            'range': require('./components/range'),
            'button': require('./components/button'),
            'checkbox': require('./components/checkbox'),
            'select': require('./components/select'),
            'text': require('./components/text'),
            'color': require('./components/color'),
            'folder': require('./components/folder'),
            'file': require('./components/file'),
            'display': require('./components/display')
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

        return new this.components[opts.type](root, opts, theme, this.uuid);
    }



}
