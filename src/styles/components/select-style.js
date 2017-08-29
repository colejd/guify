const csjs = require('csjs-inject');

import { theme } from '../../theme.js';

module.exports = csjs`

.guify-select-dropdown {
    display: inline-block;
    position: absolute;
    width: calc(100% - ${theme.sizing.labelWidth});
    padding-left: 1.5%;
    height: ${theme.sizing.componentHeight};
    border: none;
    border-radius: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance:none;
    appearance: none;
    font-family: inherit;
    background-color: ${theme.colors.componentBackground};
    color: ${theme.colors.textSecondary};
    box-sizing: border-box !important;
    -moz-box-sizing: border-box !important;
    -webkit-box-sizing: border-box !important;
}

/* Disable default outline since we're providing our own */
.guify-select-dropdown:focus {
    outline: none;
}
.guify-select-dropdown::-moz-focus-inner {
    border: 0;
}


.guify-select-dropdown:focus,
.guify-select-dropdown:hover {
    color: ${theme.colors.textHover};
    background-color: ${theme.colors.componentForeground};
}

.guify-select-dropdown::-ms-expand {
    display:none;
}
.guify-select-triangle {
    content: ' ';
    border-right: 3px solid transparent;
    border-left: 3px solid transparent;
    line-height: ${theme.sizing.componentHeight};
    position: absolute;
    right: 2.5%;
    z-index: 1;
    pointer-events: none;
}

.guify-select-triangle--up {
    bottom: 55%;
    border-bottom: 5px solid ${theme.colors.textSecondary};
    border-top: 0px transparent;
}

.guify-select-triangle--down {
    top: 55%;
    border-top: 5px solid ${theme.colors.textSecondary};
    border-bottom: 0px transparent;
}

.guify-select-triangle--up-highlight {
    border-bottom-color: ${theme.colors.textHover};
}

.guify-select-triangle--down-highlight {
    border-top-color: ${theme.colors.textHover};
}

`;
