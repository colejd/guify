const csjs = require('csjs-inject');

import { theme } from '../../theme.js';

let borderSize = '4px'

module.exports = csjs`

input[type=checkbox].guify-checkbox {
    opacity: 0;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    margin: 0;
    border-radius: 0;
    cursor: pointer;
}

input[type=checkbox].guify-checkbox + label {
    margin: 0;
}

input[type=checkbox].guify-checkbox + label:before {
    content: "";
    display: inline-block;
    width: ${theme.sizing.componentHeight};
    height: ${theme.sizing.componentHeight};
    padding: 0;
    margin: 0;
    vertical-align: middle;
    background-color: ${theme.colors.componentBackground};
    border-radius: 0px;
    cursor: pointer;
    box-sizing: content-box;
    -moz-box-sizing: content-box;
    -webkit-box-sizing: content-box;

}

/* Hover style */
input[type=checkbox].guify-checkbox:hover + label:before {
    width: calc(${theme.sizing.componentHeight} - (${borderSize} * 2));
    height: calc(${theme.sizing.componentHeight} - (${borderSize} * 2));
    background-color: ${theme.colors.componentBackgroundHover};
    border: solid 4px ${theme.colors.componentBackground};
}

/* Checked style */
input[type=checkbox]:checked.guify-checkbox + label:before {
    width: calc(${theme.sizing.componentHeight} - (${borderSize} * 2));
    height: calc(${theme.sizing.componentHeight} - (${borderSize} * 2));
    background-color: ${theme.colors.componentForeground};
    border: solid ${borderSize} ${theme.colors.componentBackground};
}

/* Focused and checked */
input[type=checkbox]:checked.guify-checkbox:focus + label:before {
    width: calc(${theme.sizing.componentHeight} - (${borderSize} * 2));
    height: calc(${theme.sizing.componentHeight} - (${borderSize} * 2));
    background-color: ${theme.colors.componentForeground};
    border: solid ${borderSize} ${theme.colors.componentBackgroundHover};
}

/* Focus and unchecked */
input[type=checkbox].guify-checkbox:focus + label:before {
    background-color: ${theme.colors.componentBackgroundHover};
}

`;
