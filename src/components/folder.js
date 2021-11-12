import ComponentBase from "./component-base.js";

import css from "dom-css";

import "./folder.css";

export default class Folder extends ComponentBase {
    constructor (root, opts, theme) {
        super(root, opts, theme);

        this.container.classList.add("guify-folder");
        this.container.setAttribute("role", "button");
        this.container.setAttribute("tabIndex", "0"); // Make tabbable
        // css(container, {
        //     color: theme.colors.text1,
        // })

        this.arrow = this.container.appendChild(document.createElement("div"));
        this.arrow.innerHTML = "&#9662;";
        css(this.arrow, {
            "width": "1.5em",
        });

        this.label = this.container.appendChild(document.createElement("div"));
        this.label.innerHTML = opts.label;

        this.container.onclick = () => {
            this.Toggle();
        };

        // Defocus on mouse up (for non-accessibility users)
        this.container.addEventListener("mouseup", () => {
            this.container.blur();
        });

        this.container.addEventListener("keydown", (e) => {
            // Listen for Space or Enter
            if(e.which === 13 || e.which === 32) {
                this.Toggle();
            }
        });

        this.folderContainer = root.appendChild(document.createElement("div"));
        this.folderContainer.classList.add("guify-folder-contents");

        this.open = this.opts.open || false;
        this.SetOpen(this.open);


    }

    // Toggle visibility
    Toggle() {
        this.open = !this.open;
        this.SetOpen(this.open);
    }

    // Show or hide the contents
    SetOpen(show) {
        this.open = show;
        if(show) {
            this.folderContainer.classList.remove("guify-folder-closed");
            this.arrow.innerHTML = "&#9662;"; // Down triangle

        }
        else {
            this.folderContainer.classList.add("guify-folder-closed");
            this.arrow.innerHTML = "&#9656;"; // Right triangle
        }

    }
}
