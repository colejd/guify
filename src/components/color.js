import ComponentBase from "./component-base.js";

import ColorPicker from "simple-color-picker";
import css from "dom-css";
import tinycolor from "tinycolor2";
import insertCss from "insert-css";

import { default as ContainerPartial } from "./partials/container";
import { default as LabelPartial } from "./partials/label";
import { default as ValuePartial } from "./partials/value";

export default class Color extends ComponentBase {
    constructor (root, opts, theme) {
        super(root, opts, theme);

        opts.format = opts.format || "rgb";
        opts.initial = opts.initial || "#123456";

        this.container = ContainerPartial(root, opts.label, theme);
        this.label = LabelPartial(this.container, opts.label, theme);

        var icon = this.container.appendChild(document.createElement("span"));
        icon.className = "guify-color-" + this.uuid;

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
            position: "relative",
            display: "inline-block",
            width: "12.5%",
            height: theme.sizing.componentHeight,
            backgroundColor: this.picker.getHexString()
        });

        this.InjectStyles();

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

    InjectStyles() {
        insertCss(`

        .Scp {
            width: 125px;
            height: 100px;
            -webkit-user-select: none;
            -moz-user-select: none;
                -ms-user-select: none;
                    user-select: none;
            position: relative;
            z-index: 1000;
            cursor: pointer;
        }
        .Scp-saturation {
            position: relative;
            width: calc(100% - 25px);
            height: 100%;
            background: linear-gradient(to right, #fff 0%, #f00 100%);
            float: left;
            margin-right: 5px;
        }
        .Scp-brightness {
            width: 100%;
            height: 100%;
            background: linear-gradient(to top, #000 0%, rgba(255,255,255,0) 100%);
        }
        .Scp-sbSelector {
            border: 1px solid;
            position: absolute;
            width: 14px;
            height: 14px;
            background: #fff;
            border-radius: 10px;
            top: -7px;
            left: -7px;
            box-sizing: border-box;
            z-index: 10;
        }
        .Scp-hue {
            width: 20px;
            height: 100%;
            position: relative;
            float: left;
            background: linear-gradient(to bottom, #f00 0%, #f0f 17%, #00f 34%, #0ff 50%, #0f0 67%, #ff0 84%, #f00 100%);
        }
        .Scp-hSelector {
            position: absolute;
            background: #fff;
            border-bottom: 1px solid #000;
            right: -3px;
            width: 10px;
            height: 2px;
        }

        `);
    }
}
