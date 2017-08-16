const csjs = require('csjs-inject');

import common from './common-style.js';

module.exports = csjs`

.guify-panel {
    position: absolute;
    padding: 14px;
    padding-bottom: 9px; /* 5px padding on each element means last item will have 14px to bottom */

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
    @include transition(all 300ms ease);
    @include transition-property(height, padding-top, padding-bottom);
    //transition: height 0.3s ease, padding-top 0.3s ease, padding-bottom 0.3s ease;
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
