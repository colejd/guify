const csjs = require('csjs-inject');

export default (theme) => {
    let trackColor = theme.colors.componentBackground;
    let thumbColor = theme.colors.componentForeground;
    let thumbHighlight = theme.colors.componentActive;

    return csjs`
        .guify-interval {
            -webkit-appearance: none;
            position: absolute;
            height: 20px;
            margin: 0px 0;
            width: 33%;
            left: 54.5%;
            background-color: ${trackColor};
            cursor: ew-resize;

            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        .guify-interval-handle {
            background-color: ${thumbColor};
            position: absolute;
            height: ${theme.sizing.componentHeight};
            min-width: 1px;
        }
        .guify-interval-handle:focus {
            background: ${thumbHighlight};
        }
    `
};
