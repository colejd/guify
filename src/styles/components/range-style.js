const csjs = require('csjs-inject');

import common from '../common-style.js';

let trackColor = common.theme.colors.background2;
let thumbColor = common.theme.colors.foreground1;
let thumbHighlight = common.theme.colors.background2hover;

module.exports = csjs`

input[type=range].guify-range {
    -webkit-appearance: none;
    width: 100%;
    margin: 0px 0;
    display: inline-block;
}

/* Remove outlines since we'll be adding our own */
input[type=range].guify-range:focus {
    outline: none;
}
input[type=range].guify-range::-moz-focus-outer {
    border: 0;
}

/* Webkit */
input[type=range].guify-range::-webkit-slider-runnable-track {
    width: 100%;
    height: 20px;
    cursor: ew-resize;
    background: ${trackColor};
}
input[type=range].guify-range::-webkit-slider-thumb {
    height: 20px;
    width: 10px;
    background: ${thumbColor};
    cursor: ew-resize;
    -webkit-appearance: none;
    margin-top: 0px;
}
input[type=range].guify-range:focus::-webkit-slider-runnable-track {
    background: ${thumbHighlight};
    outline: none;
}

/* Gecko */
input[type=range].guify-range::-moz-range-track {
    width: 100%;
    height: 20px;
    cursor: ew-resize;
    background: ${trackColor};
}
input[type=range].guify-range:focus::-moz-range-track {
    background: ${common.theme.colors.background2hover};
}
input[type=range].guify-range::-moz-range-thumb {
    height: 20px;
    width: 10px;
    background: ${thumbColor};
    cursor: ew-resize;
}

/* IE */
input[type=range].guify-range::-ms-track {
    width: 100%;
    height: 20px;
    cursor: ew-resize;
    background: transparent;
    border-color: transparent;
    color: transparent;
}
input[type=range].guify-range::-ms-fill-lower {
    background: ${trackColor};
}
input[type=range].guify-range::-ms-fill-upper {
    background: ${trackColor};
}
input[type=range].guify-range:focus::-ms-fill-lower {
    background: ${common.theme.colors.background2hover};
}
input[type=range].guify-range:focus::-ms-fill-upper {
    background: ${common.theme.colors.background2hover};
}
input[type=range].guify-range::-ms-thumb {
    width: 10px;
    border-radius: 0px;
    background: ${thumbColor};
    cursor: ew-resize;
    height: 20px;
}
input[type=range].guify-range:focus::-ms-fill-lower {
    background: ${thumbHighlight};
    outline: none;
}
input[type=range].guify-range:focus::-ms-fill-upper {
    background: ${thumbHighlight};
    outline: none;
}

`;
