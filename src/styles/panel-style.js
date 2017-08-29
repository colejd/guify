const csjs = require('csjs-inject');

import { theme } from '../theme.js';

module.exports = csjs`

.guify-panel-container {
    position: absolute;
    background: ${theme.colors.panelBackground};
}

.guify-panel {
    padding: 14px;
    /* Last component will have a margin, so reduce padding to account for this */
    padding-bottom: calc(14px - ${theme.sizing.componentSpacing});

    /* all: initial;  */
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: default;
    text-align: left;
    box-sizing: border-box;
}

.guify-panel.guify-panel-hidden {
    height: 0px;
    display: none;
}

.guify-panel * {
    box-sizing: initial;
    -webkit-box-sizing: initial;
    -moz-box-sizing: initial;
}

.guify-panel input {
    font-family: 'Hack';
    font-size: 11px;
    display: inline;
}

.guify-panel a {
    color: inherit;
    text-decoration: none;
}

.guify-panel-toggle-button {
    position: absolute;
    top: 0;
    margin: 0;
    padding: 0;
    width: 15px;
    height: 15px;
    line-height: 15px;
    text-align: center;
    border: none;
    cursor: pointer;
    font-family: inherit;
    color: ${theme.colors.textPrimary};
    background-color: ${theme.colors.componentBackground};

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

}

/* Open/Close button styling */
.guify-panel-toggle-button svg {
    fill-opacity: 0;
    stroke-width: 3;
    stroke: ${theme.colors.componentForeground};
}

/* Remove browser default outlines since we're providing our own */
.guify-panel-toggle-button:focus {
    outline:none;
}
.guify-panel-toggle-button::-moz-focus-inner {
    border: 0;
}

.guify-panel-toggle-button:hover,
.guify-panel-toggle-button:focus {
    color: ${theme.colors.textHover};
    background-color: ${theme.colors.componentForeground};
}

.guify-panel-toggle-button:active {
    color: ${theme.colors.textActive};
    background-color: ${theme.colors.componentActive};
}

`;
