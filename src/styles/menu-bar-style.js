const csjs = require('csjs-inject');

import { theme } from '../theme.js';

module.exports = csjs`

.guify-bar {
    background-color: ${theme.colors.menuBarBackground};
    height: ${theme.sizing.menuBarHeight};
    width: 100%;
    opacity: 1.0;
    position: relative;
    left: 0;
    top: 0;
    cursor: default;
}

.guify-bar-title {
    text-align: center;
    width: 100%;
    position: absolute;
    top: calc((${theme.sizing.menuBarHeight} - ${theme.sizing.menuBarContentHeight}) / 2);
    line-height: ${theme.sizing.menuBarContentHeight};
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
    height: ${theme.sizing.menuBarContentHeight};
    position: absolute;
    top: calc((${theme.sizing.menuBarHeight} - ${theme.sizing.menuBarContentHeight}) / 2);
    color: ${theme.colors.textPrimary};
    background-color: ${theme.colors.componentBackground};
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

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
