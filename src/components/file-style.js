const csjs = require("csjs-inject");

export default (theme) => {
    return csjs`
        .guify-file-container {
            display: inline-block;
            outline: none;
            padding-top: 8px;
            padding-bottom: 8px;
            color: ${theme.colors.textPrimary};
            background-color: ${theme.colors.componentBackground};
        }

        .guify-file-container:hover.not(:disabled),
        .guify-file-container:focus.not(:disabled) {
            color: ${theme.colors.textHover};
            background-color: ${theme.colors.componentForeground};
        }

        .guify-file-container:active.not(:disabled) {
            color: ${theme.colors.textActive} !important;
            background-color: ${theme.colors.componentActive} !important;
        }

        .guify-dragover.not(:disabled) {
            background-color: ${theme.colors.componentBackground};
            box-shadow: inset 0 0 0 3px ${theme.colors.componentForeground};
        }

        /*
        .guify-file-container:disabled {
            pointer-events: none;
            color: ${theme.colors.disabledText} !important;
            background-color: ${theme.colors.disabledBackground} !important;
            box-shadow: inset 0 0 0 3px ${theme.colors.disabledBackground} !important;
        }
        */
    `;
};
