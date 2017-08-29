const csjs = require('csjs-inject');

import { theme } from '../theme.js';

module.exports = csjs`

.guify-toast-notification {
    box-sizing: border-box;
    color: theme.colors.text1;
    position: relative;
    width: 100%;
    /* height: 20px; */
    padding: 8px;
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
    font-family: 'Hack', monospace;
    font-size: 11px;
}

.guify-toast-area .guify-toast-notification:nth-child(odd) {
    color: ${theme.colors.textPrimary};
    background-color: ${theme.colors.panelBackground};
}

.guify-toast-area .guify-toast-notification:nth-child(even) {
    color: ${theme.colors.textPrimary};
    background-color: ${theme.colors.menuBarBackground};
}

.guify-toast-close-button {
    color: ${theme.colors.textPrimary};
    background: transparent;
    position: absolute;
    textAlign: center;
    margin-top: auto;
    margin-bottom: auto;
    border: none;
    cursor: pointer;
    top: 0;
    bottom: 0;
    right: 8px;
}

`;
