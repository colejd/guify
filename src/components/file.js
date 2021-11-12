import ComponentBase from "./component-base.js";
import css from "dom-css";

import { default as styles } from "styles/components/file-style.js";

/**
 * File component. Drag and drop a file or click to choose a file.
 */
export default class File extends ComponentBase {
    constructor (root, opts, theme) {
        super(root, opts, theme);

        this.styles = styles(theme);

        this.opts.fileReadFunc = this.opts.fileReadFunc || "readAsDataURL";

        this.file = null;
        this.fileName = null;

        this.container.classList.add(this.styles["guify-file-container"]);
        this.container.setAttribute("role", "button");
        this.container.setAttribute("tabIndex", "0"); // Make tabbable
        css(this.container, {
            width: "100%",
            "box-sizing": "border-box",
            "-moz-box-sizing": "border-box",
            "-webkit-box-sizing": "border-box",
            height: "unset", // Grow with content
            padding: "8px"
        });

        let label = this.container.appendChild(document.createElement("div"));
        label.innerHTML = opts.label;
        css(label, "padding-bottom", "5px");

        this.input = this.container.appendChild(document.createElement("input"));
        this.input.setAttribute("type", "file");
        this.input.setAttribute("multiple", false);
        this.input.style.display = "none";
        // Add ARIA attribute to input based on label text
        if(opts.label) this.input.setAttribute("aria-label", opts.label);

        this.fileLabel = this.container.appendChild(document.createElement("div"));
        this.fileLabel.innerHTML = "Choose a file...";
        //css(this.fileLabel, 'color', theme.colors.textSecondary);

        let FileDropped = (event) => {
            var files;
            if(event.dataTransfer) {
                files = event.dataTransfer.files;
            } else if(event.target) {
                files = event.target.files;
            }

            //this.SetValue(files[0]);
            let value = files[0];
            var reader = new FileReader();
            reader.onload = () => {
                this.file = reader.result;
                this.fileLabel.innerHTML = files[0].name;
                this.emit("input", this.file);
            };

            reader[this.opts.fileReadFunc](files[0]);
        };

        this.input.addEventListener("change", FileDropped);

        this.container.addEventListener("dragover", (event) => {
            event.preventDefault();
            event.stopPropagation();
            this.container.classList.add(this.styles["guify-dragover"]);
        });

        this.container.addEventListener("dragleave", (event) => {
            event.preventDefault();
            event.stopPropagation();
            this.container.classList.remove(this.styles["guify-dragover"]);
        });

        this.container.addEventListener("drop", (event) => {
            event.preventDefault();
            event.stopPropagation();
            this.container.classList.remove(this.styles["guify-dragover"]);
            FileDropped(event);
        });

        this.container.onclick = () => {
            this.input.click();
        };

        this.container.addEventListener("keydown", (e) => {
            // Listen for Space or Enter
            if(e.which === 13 || e.which === 32) {
                this.input.click();
            }
        });

        // Defocus on mouse up (for non-accessibility users)
        this.container.addEventListener("mouseup", () => {
            this.container.blur();
        });

    }

    SetValue(value) {
        return;
    }

    GetValue() {
        return this.file;
    }

}
