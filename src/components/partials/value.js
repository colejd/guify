import css from "dom-css";

import "./value.css";

export default (root, text, theme, width, left) => {

    let input = root.appendChild(document.createElement("input"));
    input.type = "text";
    input.classList.add("guify-value-input");

    input.value = text;

    if (!left) {
        input.classList.add("guify-value-input-right");
    }

    css(input, {
        "width": width,
    });

    return input;
};
