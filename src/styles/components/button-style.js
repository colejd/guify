const csjs = require('csjs-inject');

import { theme } from '../../theme.js';

module.exports = csjs`

.guify-button {
    box-sizing: border-box !important;
    color: ${theme.colors.textSecondary};
    background-color: ${theme.colors.componentBackground};

    position: absolute;
    text-align: center;
    height: ${theme.sizing.componentHeight};
    line-height: ${theme.sizing.componentHeight};
    padding-top: 0px;
    padding-bottom: 0px;
    width: calc(100% - ${theme.sizing.labelWidth});
    border: none;
    cursor: pointer;
    right: 0;
    font-family: inherit;
}


.guify-button:focus {
    outline:none;
}
.guify-button::-moz-focus-inner {
    border:0;
}

.guify-button:hover,
.guify-button:focus {
    color: ${theme.colors.textHover};
    background-color: ${theme.colors.componentForeground};
}

.guify-button:active {
    color: ${theme.colors.textActive} !important;
    background-color: ${theme.colors.componentActive} !important;
}

`;
