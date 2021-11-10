import themes from './themes';

class Theme {
    constructor() {
        // TODOjon:
        // This needs to be turned on or when we import the theme in *-theme.js, the values are not populated yet.
        // This is a bug.
        this.Set(themes.dark);
    }

    Set(theme) {

        // Merge the base theme with the theme parameters and make
        // the result properties of this object
        Object.assign(this, baseTheme, theme);

    }

}

const baseTheme = {
    name: "BaseTheme",

    colors: {
        menuBarBackground: 'black',
        menuBarText: 'black',
        panelBackground: 'black',

        componentBackground: 'black',
        componentBackgroundHover: 'black',
        componentForeground: 'black',
        componentActive: 'black',

        textPrimary: 'black',
        textSecondary: 'black',
        textHover: 'black',
        textActive: 'black',
    },

    sizing: {
        menuBarHeight: '25px',
        componentHeight: '20px',
        componentSpacing: '5px',
        labelWidth: '42%',
    },
};

// Export "singleton" instance
export let theme = new Theme();
