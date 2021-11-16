import "./container.css";

// eslint-disable-next-line no-unused-vars
let Container = (root, label, theme) => {
    let container = root.appendChild(document.createElement("div"));
    container.classList.add("guify-component-container");
    return container;
};

export default Container;
