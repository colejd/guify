import themes from './themes';

class Theme {
    constructor() {
        //this.Set(themes.dark);
    }

    Set(theme) {
        this.name = theme.name;
        this.colors = theme.colors;
        this.sizing = theme.sizing;
        this.font = theme.font;
    }

}

// Export "singleton" instance
export let theme = new Theme();
