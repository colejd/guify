const csjs = require('csjs-inject');

import { theme } from '../theme.js';

module.exports = csjs`

.guify-bar {
    background-color: ${theme.colors.menuBarBackground};
    height: ${theme.sizing.menuBarHeight};
    width: 100%;
    opacity: 1.0;
    position: relative;
    cursor: default;
}

.guify-bar-title {
    color: ${theme.colors.text1};
    text-align: center;
    width: 100%;
    position: absolute;
    top: 0;
    line-height: ${theme.sizing.menuBarHeight};
    color: ${theme.colors.menuBarText};
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.guify-bar-button {
    text-align: center;
    border: none;
    cursor: pointer;
    font-family: inherit;
    height: 100%;
    position: absolute;
    top: 0;
    color: ${theme.colors.textPrimary};
    background-color: ${theme.colors.componentBackground};
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin: 0;

}

/* Hide default accessibility outlines since we're providing our own visual feedback */
.guify-bar-button:focus {
    outline:none;
}
.guify-bar-button::-moz-focus-inner {
    border:0;
}

.guify-bar-button:hover,
.guify-bar-button:focus {
    color: ${theme.colors.textHover};
    background-color: ${theme.colors.componentForeground};
}

.guify-bar-button:active {
    color: ${theme.colors.textActive} !important;
    background-color: ${theme.colors.componentActive} !important;
}


`;
