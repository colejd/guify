const csjs = require('csjs-inject');

import common from '../common-style.js';

module.exports = csjs`

.guify-file-container {
    display: inline-block;
    outline: none;
    padding-top: 8px;
    padding-bottom: 8px;
    background-color: ${common.theme.colors.background2};
}

.guify-file-container:hover,
.guify-file-container:focus {
    color: ${common.theme.colors.text2};
    background-color: ${common.theme.colors.background2hover};
}

.guify-file-container:active {
    color: ${common.theme.colors.background2} !important;
    background-color: ${common.theme.colors.text2} !important;
}

.guify-dragover {
    background-color: ${common.theme.colors.background2};
    box-shadow: inset 0 0 0 3px ${common.theme.colors.background2hover};
}


`;
