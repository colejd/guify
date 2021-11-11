const csjs = require('csjs-inject');

export default (theme) => {
    return  csjs`
        .guify-container {
            position: relative;
            left: 0;
            width: 100%;
            font-size: 11px;
            z-index: 9999;
        }
    `
};
