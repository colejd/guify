const csjs = require('csjs-inject');

import { theme } from '../../theme.js';

module.exports = csjs`

.guify-folder {
    cursor: pointer;
    padding-left: 0.5em;
    color: ${theme.colors.textPrimary};
}

.guify-folder div {
    display: inline-block;
    vertical-align: sub;
    line-height: calc(${theme.sizing.componentHeight} + 5px);
}

.guify-folder:hover,
.guify-folder:focus {
    color: ${theme.colors.textHover};
    background-color: ${theme.colors.componentForeground};
    outline: none;
}


.guify-folder-contents {
    display: block;
    box-sizing: border-box;
    padding-left: 14px;
    margin-bottom: 5px;
    border-left: 2px solid ${theme.colors.componentBackground};
}

.guify-folder-contents.guify-folder-closed {
    height: 0;
    display: none;
}


`;
