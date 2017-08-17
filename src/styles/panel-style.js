const csjs = require('csjs-inject');

import { theme } from '../theme.js';

module.exports = csjs`

.guify-panel {
    position: absolute;
    padding: 14px;
    /* Last component will have a margin, so reduce padding to account for this */
    padding-bottom: calc(14px - ${theme.sizing.componentSpacing});

    /* all: initial;  */
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: default;
    text-align: left;
    box-sizing: border-box;
}

.guify-panel.guify-panel-hidden {
    height: 0px;
    display: none;
    /* transition: height 0.3s ease, padding-top 0.3s ease, padding-bottom 0.3s ease; */
}

.guify-panel * {
    box-sizing: initial;
    -webkit-box-sizing: initial;
    -moz-box-sizing: initial;
}

.guify-panel * input {
    font-family: 'Hack';
    font-size: 11px;
    display: inline;
}

.guify-panel * a {
    color: inherit;
    text-decoration: none;
}

`;
