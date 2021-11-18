import ComponentBase from "../component-base.js";

import css from "dom-css";

import "./panel.css";

import { default as HeaderPartial } from "../partials/header";

export class Panel extends ComponentBase {
    constructor(root, opts, theme) {
        super(root, opts, theme, false);

        // Container the panel will sit in
        this.container = root.appendChild(document.createElement("div"));
        this.container.classList.add("guify-panel-container");
        css(this.container, {
            width: opts.width,
            opacity: opts.opacity || 1.0,
        });

        if (opts.align == "left") {
            if (opts.panelMode == "outer") {
                this.container.classList.add("guify-panel-container-left-outer");
            } else if (opts.panelMode == "inner") {
                this.container.classList.add("guify-panel-container-left-inner");
            }
        } else {
            if (opts.panelMode == "outer") {
                this.container.classList.add("guify-panel-container-right-outer");
            } else if (opts.panelMode == "inner") {
                this.container.classList.add("guify-panel-container-right-inner");
            }
        }

        if (opts.panelOverflowBehavior == "scroll") {
            this.container.classList.add("guify-panel-container-scrollable");
        }

        if(opts.barMode === "none") {
            // this._MakeToggleButton();
            css(this.container, {
                maxHeight: "100%",
            });
        }

        // Create panel inside container
        this.panel = this.container.appendChild(document.createElement("div"));
        this.panel.classList.add("guify-panel");

        // Add a title to the panel
        if(opts.barMode === "none" && opts.title)
            HeaderPartial(this.panel, opts.title, theme);

    }

    /**
     * Makes the panel visible based on the truthiness of `show`.
     * @param {Bool} [show]
     */
    SetVisible(show) {
        if(show){
            // this.panel.style.height = Array.prototype.reduce.call(this.panel.childNodes, function(p, c) {return p + (c.offsetHeight || 0) + 5 + 1;}, 0) + 'px';
            // this.panel.style.paddingTop = '14px';
            // this.panel.style.paddingBottom = '8px';
            this.panel.classList.remove("guify-panel-hidden");

            if(this.menuButton) this.menuButton.setAttribute("alt", "Close GUI");

        }
        else {
            // this.panel.style.height = '0px';
            // this.panel.style.paddingTop = '0px';
            // this.panel.style.paddingBottom = '0px';
            this.panel.classList.add("guify-panel-hidden");

            if(this.menuButton) this.menuButton.setAttribute("alt", "Open GUI");

        }
    }

    /**
     * Toggles the visibility of the panel.
     */
    ToggleVisible() {
        if (this.panel.classList.contains("guify-panel-hidden"))
            this.SetVisible(true);
        else
            this.SetVisible(false);
    }

    /**
     * Makes a show/hide button that sits at the bottom of the panel.
     */
    _MakeToggleButton() {
        // Make the menu collapse button
        this.menuButton = this.container.appendChild(document.createElement("button"));
        this.menuButton.className = "guify-panel-toggle-button";
        css(this.menuButton, {
            left: this.opts.align == "left" ? "0px" : "unset",
            right: this.opts.align == "left" ? "unset" : "0px",
        });

        this.menuButton.onclick = () => {
            this.ToggleVisible();
        };

        // Defocus on mouse up (for non-accessibility users)
        this.menuButton.addEventListener("mouseup", () => {
            this.menuButton.blur();
        });

        this.menuButton.innerHTML = `
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect x="10%" y="10%" width="80%" height="80%"/>
        </svg>
        `;
    }

}
