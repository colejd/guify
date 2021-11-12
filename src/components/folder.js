import css from "dom-css";

import { default as styles } from "styles/components/folder-style.js";

import { default as ContainerPartial } from "./partials/container";

export default class Folder {
    constructor (root, opts, theme, uuid) {
        this.opts = opts;
        this.styles = styles(theme);

        this.container = ContainerPartial(root, opts.label, theme);
        this.container.classList.add(styles(theme)["guify-folder"]);
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
        this.folderContainer.classList.add(this.styles["guify-folder-contents"]);

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
            this.folderContainer.classList.remove(this.styles["guify-folder-closed"]);
            this.arrow.innerHTML = "&#9662;"; // Down triangle

        }
        else {
            this.folderContainer.classList.add(this.styles["guify-folder-closed"]);
            this.arrow.innerHTML = "&#9656;"; // Right triangle
        }

    }
}
