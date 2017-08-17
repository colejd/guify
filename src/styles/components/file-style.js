const csjs = require('csjs-inject');

import { theme } from '../../theme.js';

module.exports = csjs`

.guify-file-container {
    display: inline-block;
    outline: none;
    padding-top: 8px;
    padding-bottom: 8px;
    color: ${theme.colors.textPrimary};
    background-color: ${theme.colors.componentBackground};
}

.guify-file-container:hover,
.guify-file-container:focus {
    color: ${theme.colors.textHover};
    background-color: ${theme.colors.componentForeground};
}

.guify-file-container:active {
    color: ${theme.colors.textActive} !important;
    background-color: ${theme.colors.componentActive} !important;
}

.guify-dragover {
    background-color: ${theme.colors.componentBackground};
    box-shadow: inset 0 0 0 3px ${theme.colors.componentForeground};
}


`;
