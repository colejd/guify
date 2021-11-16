import "./label.css";

// eslint-disable-next-line no-unused-vars
export default (root, text, theme) => {
    var label = root.appendChild(document.createElement("div"));
    label.classList.add("guify-component-label");
    label.innerHTML = text;
    return label;
};
