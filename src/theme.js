import themes from "./themes";

export default class Theme {
    constructor(themeName) {

        var theme = themes[themeName];
        if(theme === undefined) {
            console.error(`There is no theme preset with the name '${themeName}'! Defaulting to dark theme.`);
            theme = themes.dark;
        }

        // Merge the base theme with the theme parameters and make
        // the result properties of this object
        Object.assign(this, baseTheme, theme);
    }

    /**
     * Takes the values from the theme object and applies them as CSS variables to the page.
     */
    Apply() {
        console.log(this);

        let root = document.documentElement;
        root.style.setProperty("--color-menu-bar-background", this.colors.menuBarBackground);
        root.style.setProperty("--color-menu-bar-text", this.colors.menuBarText);
        root.style.setProperty("--color-panel-background", this.colors.panelBackground);

        root.style.setProperty("--color-component-background", this.colors.componentBackground);
        root.style.setProperty("--color-component-background-hover", this.colors.componentBackgroundHover);
        root.style.setProperty("--color-component-background-disabled", this.colors.componentBackgroundDisabled);
        root.style.setProperty("--color-component-foreground", this.colors.componentForeground);
        root.style.setProperty("--color-component-active", this.colors.componentActive);

        root.style.setProperty("--color-text-primary", this.colors.textPrimary);
        root.style.setProperty("--color-text-secondary", this.colors.textSecondary);
        root.style.setProperty("--color-text-hover", this.colors.textHover);
        root.style.setProperty("--color-text-active", this.colors.textActive);
        root.style.setProperty("--color-text-disabled", this.colors.textDisabled);

        root.style.setProperty("--size-menu-bar-height", this.sizing.menuBarHeight);
        root.style.setProperty("--size-component-height", this.sizing.componentHeight);
        root.style.setProperty("--size-component-spacing", this.sizing.componentSpacing);
        root.style.setProperty("--size-label-width", this.sizing.labelWidth);

        root.style.setProperty("--font-family", this.font.fontFamily);
        root.style.setProperty("--font-size", this.font.fontSize);
        root.style.setProperty("--font-weight", this.font.fontWeight);

        root.style.setProperty("--font-family-for-input", this.font.inputFontFamily);
    }
}

const baseTheme = {
    name: "BaseTheme",

    colors: {
        menuBarBackground: "black",
        menuBarText: "black",
        panelBackground: "black",

        componentBackground: "black",
        componentBackgroundHover: "black",
        componentBackgroundDisabled: "black",
        componentForeground: "black",
        componentActive: "black",

        textPrimary: "black",
        textSecondary: "black",
        textHover: "black",
        textActive: "black",
        textDisabled: "black",
    },

    sizing: {
        menuBarHeight: "25px",
        componentHeight: "20px",
        componentSpacing: "5px",
        labelWidth: "42%",
    },

    font: {
        fontFamily: "'Hack', ui-monospace, monospace",
        fontSize: "11px",
        fontWeight: "400",

        // The font family used for `value` components.
        inputFontFamily: "'Hack', ui-monospace, monospace",
    },
};
