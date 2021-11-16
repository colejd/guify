import ComponentBase from "../component-base.js";

import ColorPicker from "simple-color-picker";
import tinycolor from "tinycolor2";

import css from "dom-css";
import "./color.css";

import { default as LabelPartial } from "../partials/label";
import { default as ValuePartial } from "../partials/value";

export default class Color extends ComponentBase {
    constructor (root, opts, theme) {
        super(root, opts, theme);

        opts.format = opts.format || "rgb";
        opts.initial = opts.initial || "#123456";

        this.label = LabelPartial(this.container, opts.label, theme);

        var icon = this.container.appendChild(document.createElement("span"));
        icon.classList.add("guify-color");

        var value = ValuePartial(this.container, "", theme, `calc(100% - ${theme.sizing.labelWidth} - 12% - 0.5em)`);
        value.setAttribute("readonly", "true");

        icon.onmouseover = () => {
            this.picker.$el.style.display = "";
        };

        var initial = opts.initial;
        switch (opts.format) {
            case "rgb":
                initial = tinycolor(initial).toHexString();
                break;
            case "hex":
                initial = tinycolor(initial).toHexString();
                break;
            case "array":
                initial = tinycolor.fromRatio({r: initial[0], g: initial[1], b: initial[2]}).toHexString();
                break;
            default:
                break;
        }

        this.picker = new ColorPicker({
            el: icon,
            color: initial,
            background: theme.colors.componentBackground,
            width: 125,
            height: 100
        });

        css(this.picker.$el, {
            marginTop: theme.sizing.componentHeight,
            display: "none",
            position: "absolute"
        });

        css(icon, {
            position: "absolute", // Fixes extra height being applied below for some reason
            display: "inline-block",
            width: "12.5%",
            height: theme.sizing.componentHeight,
            backgroundColor: this.picker.getHexString()
        });

        icon.onmouseout = () => {
            this.picker.$el.style.display = "none";
        };

        setTimeout(() => {
            this.emit("initialized", initial);
        });

        this.picker.onChange((hex) => {
            value.value = this.Format(hex);
            css(icon, {backgroundColor: hex});
            this.emit("input", this.Format(hex));
        });
    }

    Format(hex) {
        switch (this.opts.format) {
            case "rgb":
                return tinycolor(hex).toRgbString();
            case "hex":
                return tinycolor(hex).toHexString();
            case "array":
                var rgb = tinycolor(hex).toRgb();
                return [rgb.r / 255, rgb.g / 255, rgb.b / 255].map((x) => {
                    return x.toFixed(2);
                });
            default:
                return hex;
        }
    }

    SetValue(value) {
        if (!this.picker.isChoosing) {
            this.picker.setColor(value);
        }
    }

    GetValue() {
        return this.Format(this.picker.getColor());
    }
}
