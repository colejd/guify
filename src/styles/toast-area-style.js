const csjs = require('csjs-inject');

import { theme } from '../theme.js';

module.exports = csjs`

.guify-toast-area .guify-toast-notification:nth-child(odd) {
    background-color: ${theme.colors.panelBackground};
}

.guify-toast-area .guify-toast-notification:nth-child(even) {
    background-color: ${theme.colors.menuBarBackground};
}

`;
