const csjs = require('csjs-inject');

import common from '../common-style.js';

module.exports = csjs`

input[type=checkbox].guify-checkbox {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    margin: 0;
    cursor: pointer;
}

input[type=checkbox] + label {
    margin: 0;
}

input[type=checkbox].guify-checkbox + label:before {
    content: "";
    display: inline-block;
    width: 18px;
    height: 18px;
    padding: 0px;
    vertical-align: middle;
    margin-right: 8px;
    margin-top: 1px;
    background-color: ${common.theme.colors.background2};
    border-radius: 0px;
    cursor: pointer;
    box-sizing: content-box;
    -moz-box-sizing: content-box;
    -webkit-box-sizing: content-box;

}

/* Hover style */
input[type=checkbox].guify-checkbox:hover + label:before {
    width: 10px;
    height: 10px;
    background-color: ${common.theme.colors.background2hover};
    border: solid 4px ${common.theme.colors.background2};
}

/* Focus when checked */
input[type=checkbox]:checked.guify-checkbox:focus + label:before {
    width: 10px;
    height: 10px;
    background-color: ${common.theme.colors.foreground1};
    border: solid 4px ${common.theme.colors.background2hover};
}

/* Focus when unchecked */
input[type=checkbox].guify-checkbox:focus + label:before {
    background-color: ${common.theme.colors.background2hover};
}

/* Checked style */
input[type=checkbox]:checked.guify-checkbox + label:before {
    width: 10px;
    height: 10px;
    background-color: ${common.theme.colors.foreground1};
    border: solid 4px ${common.theme.colors.background2};
}

`;
