import themes from './themes';

export default class Theme {
    constructor(themeName) {

        var theme = themes[themeName]
        if(theme === undefined) {
            console.error(`There is no theme preset with the name '${themeName}'! Defaulting to dark theme.`)
            theme = themes.dark
        }

        // Merge the base theme with the theme parameters and make
        // the result properties of this object
        Object.assign(this, baseTheme, theme)
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
