import uuid from 'uuid/v4';
import { theme } from './theme';

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

    Create(type, root, opts) {
        if(this.components[type] === undefined) {
            throw new Error(`No component type named '${type}' exists.`);
        }

        return new this.components[type](root, opts, theme, this.uuid);
    }



}
