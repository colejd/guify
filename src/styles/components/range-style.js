const csjs = require('csjs-inject');

import { theme } from '../../theme.js';

let trackColor = theme.colors.componentBackground;
let thumbColor = theme.colors.componentForeground;
let thumbHighlight = theme.colors.componentActive;

module.exports = csjs`

input[type=range].guify-range {
    -webkit-appearance: none;
    width: 100%;
    height: ${theme.sizing.componentHeight};
    margin: 0px 0;
    padding: 0;
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
    height: ${theme.sizing.componentHeight};
    cursor: ew-resize;
    background: ${trackColor};
}
input[type=range].guify-range::-webkit-slider-thumb {
    height: ${theme.sizing.componentHeight};
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
    height: ${theme.sizing.componentHeight};
    cursor: ew-resize;
    background: ${trackColor};
}
input[type=range].guify-range:focus::-moz-range-track {
    background: ${thumbHighlight};
}
input[type=range].guify-range::-moz-range-thumb {
    height: ${theme.sizing.componentHeight};
    width: 10px;
    background: ${thumbColor};
    cursor: ew-resize;
    border: none;
    border-radius: 0;
}

/* IE */
input[type=range].guify-range::-ms-track {
    width: 100%;
    height: ${theme.sizing.componentHeight};
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
    background: ${thumbHighlight};
}
input[type=range].guify-range:focus::-ms-fill-upper {
    background: ${thumbHighlight};
}
input[type=range].guify-range::-ms-thumb {
    width: 10px;
    border-radius: 0px;
    background: ${thumbColor};
    cursor: ew-resize;
    height: ${theme.sizing.componentHeight};
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
