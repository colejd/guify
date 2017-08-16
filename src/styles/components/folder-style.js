const csjs = require('csjs-inject');

import common from '../common-style.js';

module.exports = csjs`

.guify-folder {
    cursor: pointer;
    padding-left: 2px;
}

.guify-folder div {
    display: inline-block;
    vertical-align: sub;
    line-height: 25px;
}

.guify-folder:hover,
.guify-folder:focus {
    background-color: ${common.theme.colors.background2hover};
    outline: none;
}


.guify-folder-contents {
    display: block;
    box-sizing: border-box;
    padding-left: 14px;
    margin-bottom: 5px;
}

.guify-folder-contents.guify-folder-closed {
    height: 0;
    display: none;
}


`;
