const csjs = require('csjs-inject');

import common from './common-style.js';

module.exports = csjs`

.guify-bar {
    background-color: ${common.theme.colors.background1};
    height: ${common.theme.sizing.menuBarHeight};
    width: 100%;
    opacity: 1.0;
    position: relative;
    left: 0;
    top: 0;
}

.guify-bar-title {
    text-align: center;
    width: 100%;
    position: absolute;
    top: calc((${common.theme.sizing.menuBarHeight} - ${common.theme.sizing.menuBarContentHeight}) / 2);
    line-height: ${common.theme.sizing.menuBarContentHeight};
    color: ${common.theme.colors.text1};
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
    height: ${common.theme.sizing.menuBarContentHeight};
    position: absolute;
    top: calc((${common.theme.sizing.menuBarHeight} - ${common.theme.sizing.menuBarContentHeight}) / 2);
    color: ${common.theme.colors.text1};
    background-color: ${common.theme.colors.background2};
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

}

.guify-bar-button:hover,
.guify-bar-button:focus {
    background-color: ${common.theme.colors.background2hover};
}

.guify-bar-button:active {
    color: ${common.theme.colors.background2} !important;
    background-color: ${common.theme.colors.text2} !important;
}


`;
