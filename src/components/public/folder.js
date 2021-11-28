import ComponentBase from "../component-base.js";

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
        this.arrow.classList.add("guify-folder-arrow");
        this.arrow.innerHTML = "&#9662;";

        this.label = this.container.appendChild(document.createElement("div"));
        this.label.classList.add("guify-folder-text");
        this.label.innerHTML = opts.label;

        this.container.onclick = () => {
            this.Toggle();
        };

        // Defocus on mouse up (for non-accessibility users)
        this.container.addEventListener("mouseup", () => {
            this.container.blur();
        });

        this.container.addEventListener("keydown", (event) => {
            if (event.code === "Enter" || event.code === "Space") {
                event.preventDefault();
                this.Toggle();
            }
        });

        this.folderContainer = root.appendChild(document.createElement("div"));
        this.folderContainer.classList.add("guify-folder-contents");

        this.open = this.opts.open || false;
        this.SetOpen(this.open);

    }

    SetEnabled(enabled) {
        super.SetEnabled(enabled);
        // Disable everything in the folder
        if (enabled) {
            this.folderContainer?.classList.remove("disabled");
        } else {
            this.folderContainer?.classList.add("disabled");
        }
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

    Remove() {
        if (this.folderContainer) {
            this.folderContainer.parentNode.removeChild(this.folderContainer);
        }
        super.Remove();
    }
}
