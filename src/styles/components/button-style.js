const csjs = require('csjs-inject');

import common from '../common-style.js';

module.exports = csjs`

.guify-button {
    box-sizing: border-box !important;
    color: ${common.theme.colors.text2};
    background-color: ${common.theme.colors.background2};

    position: absolue;
    text-align: center;
    height: 20px;
    width: 62%;
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
    color: ${common.theme.colors.text2};
    background-color: ${common.theme.colors.background2hover};
}

.guify-button:active {
    color: ${common.theme.colors.background2} !important;
    background-color: ${common.theme.colors.text2} !important;
}

`;
