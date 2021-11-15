import "./label.css";

// eslint-disable-next-line no-unused-vars
export default (root, text, theme) => {
    var background = root.appendChild(document.createElement("div"));
    background.classList.add("guify-component-label");

    var label = background.appendChild(document.createElement("div"));
    label.classList.add("guify-component-label-text");
    label.innerHTML = text;
    return label;
};
