const csjs = require('csjs-inject');

import common from './common-style.js';

module.exports = csjs`

.guify-toast-area .guify-toast-notification:nth-child(odd) {
    background-color: ${common.theme.colors.background2};
}

.guify-toast-area .guify-toast-notification:nth-child(even) {
    background-color: ${common.theme.colors.background1};
}

`;
