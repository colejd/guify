import ComponentBase from "../component-base.js";

import ColorPicker from "simple-color-picker";

import css from "dom-css";
import "./color.css";

import { default as LabelPartial } from "../partials/label";
import { default as ValuePartial } from "../partials/value";

import { NormalizeColorFormat, ColorFormatHasAlpha, ParseColor, FormatColor } from "../../utils/color-utils";

const DEFAULT_COLOR = "#123456";

// Checkerboard shown behind semi-transparent colors so the alpha level is visible.
const CHECKERBOARD = "repeating-conic-gradient(rgba(128, 128, 128, 0.6) 0% 25%, rgba(200, 200, 200, 0.6) 0% 50%)";
const CHECKERBOARD_SIZE = "10px 10px";

export default class Color extends ComponentBase {
    constructor (root, opts, theme) {
        super(root, opts, theme);

        this.format = NormalizeColorFormat(opts.format);
        this.hasAlpha = ColorFormatHasAlpha(this.format);
        opts.format = this.format;

        let initialColor = ParseColor(opts.initial);
        if (!initialColor) {
            if (opts.initial !== undefined && opts.initial !== null) {
                console.warn(`Could not parse initial color '${opts.initial}', falling back to '${DEFAULT_COLOR}'.`);
            }
            initialColor = ParseColor(DEFAULT_COLOR);
        }
        this.alpha = this.hasAlpha ? initialColor.getAlpha() : 1;

        this.label = LabelPartial(this.container, opts.label, theme);

        this.icon = this.container.appendChild(document.createElement("span"));
        this.icon.classList.add("guify-color");
        if (opts.label) this.icon.setAttribute("aria-label", opts.label + " swatch");

        this.valueComponent = ValuePartial(this.container, "", theme, `calc(100% - ${theme.sizing.labelWidth} - 12% - 0.5em)`);
        this.valueComponent.setAttribute("readonly", "true");
        if (opts.label) this.valueComponent.setAttribute("aria-label", opts.label + " value");

        // The popup holds the hue/saturation/brightness picker and (optionally) the alpha slider.
        // It lives inside the swatch so that hovering either keeps it open.
        this.popup = this.icon.appendChild(document.createElement("div"));
        this.popup.classList.add("guify-color-popup");

        this.picker = new ColorPicker({
            el: this.popup,
            color: initialColor.toHexString(),
            background: theme.colors.componentBackground,
            width: 125,
            height: 100
        });

        css(this.popup, {
            marginTop: theme.sizing.componentHeight,
            display: "none",
            position: "absolute",
            backgroundColor: theme.colors.componentBackground
        });

        css(this.icon, {
            position: "absolute", // Fixes extra height being applied below for some reason
            display: "inline-block",
            width: "12.5%",
            height: theme.sizing.componentHeight
        });

        if (this.hasAlpha) {
            this._MakeAlphaSlider(opts, theme);
        }

        this.icon.onmouseover = () => {
            this.popup.style.display = "";
        };
        this.icon.onmouseout = () => {
            this.popup.style.display = "none";
        };

        this._suppressInput = false;
        this._Refresh();

        setTimeout(() => {
            this.emit("initialized", this.GetValue());
        });

        this.picker.onChange(() => {
            this._OnInput();
        });
    }

    /**
     * Builds the alpha slider shown beneath the color picker for formats with an alpha channel.
     */
    _MakeAlphaSlider(opts, theme) {
        this.alphaRow = this.popup.appendChild(document.createElement("div"));
        this.alphaRow.classList.add("guify-color-alpha");

        this.alphaInput = this.alphaRow.appendChild(document.createElement("input"));
        this.alphaInput.type = "range";
        this.alphaInput.min = 0;
        this.alphaInput.max = 1;
        this.alphaInput.step = 0.01;
        this.alphaInput.value = this.alpha;
        this.alphaInput.classList.add("guify-color-alpha-input");
        this.alphaInput.setAttribute("aria-label", (opts.label || "Color") + " alpha");
        this.alphaInput.title = "Alpha";

        css(this.alphaRow, {
            width: this.picker.$el.style.width,
            backgroundColor: theme.colors.componentBackground
        });

        // Mirror the picker's `isChoosing` so bound values don't fight the user mid-drag.
        this.alphaIsChoosing = false;
        let startChoosing = () => { this.alphaIsChoosing = true; };
        let stopChoosing = () => { this.alphaIsChoosing = false; };
        this.alphaInput.addEventListener("mousedown", startChoosing);
        this.alphaInput.addEventListener("touchstart", startChoosing, { passive: true });
        this.alphaInput.addEventListener("focus", startChoosing);
        this.alphaInput.addEventListener("blur", stopChoosing);
        window.addEventListener("mouseup", stopChoosing);
        window.addEventListener("touchend", stopChoosing);
        // Defocus on mouse up (for non-accessibility users), matching `range`
        this.alphaInput.addEventListener("mouseup", () => {
            this.alphaInput.blur();
        });

        this.alphaInput.addEventListener("input", (event) => {
            this.alpha = parseFloat(event.target.value);
            this._OnInput();
        });
    }

    /**
     * Called whenever the picker or alpha slider changes. Updates the readout and emits `input`.
     */
    _OnInput() {
        this._Refresh();
        if (!this._suppressInput) {
            this.emit("input", this.GetValue());
        }
    }

    /**
     * Updates the readout, the swatch, and the alpha slider background from the current color.
     */
    _Refresh() {
        let color = this._CurrentColor();
        this.valueComponent.value = this.GetValue();

        if (this.hasAlpha) {
            let rgba = color.toRgbString();
            let hex = color.toHexString();
            css(this.icon, {
                backgroundImage: `linear-gradient(${rgba}, ${rgba}), ${CHECKERBOARD}`,
                backgroundSize: `auto, ${CHECKERBOARD_SIZE}`
            });
            css(this.alphaRow, {
                backgroundImage: `linear-gradient(to right, transparent, ${hex}), ${CHECKERBOARD}`,
                backgroundSize: `auto, ${CHECKERBOARD_SIZE}`
            });
        } else {
            css(this.icon, {
                backgroundColor: color.toHexString()
            });
        }
    }

    /**
     * @returns {tinycolor} The picker's color combined with the current alpha
     */
    _CurrentColor() {
        return ParseColor(this.picker.getHexString()).setAlpha(this.alpha);
    }

    /**
     * Formats a color (anything `ParseColor` understands) in this component's format.
     */
    Format(color) {
        return FormatColor(color, this.format);
    }

    SetValue(value) {
        if (this.picker.isChoosing || this.alphaIsChoosing) return;

        let color = ParseColor(value);
        if (!color) {
            console.warn(`Could not parse color '${value}'.`);
            return;
        }

        this._suppressInput = true;
        if (this.hasAlpha) {
            this.alpha = color.getAlpha();
            this.alphaInput.value = this.alpha;
        }
        this.picker.setColor(color.toHexString()); // Triggers the picker's onChange, which calls `_Refresh()`
        this._suppressInput = false;
    }

    GetValue() {
        return this.Format(this._CurrentColor());
    }
}
