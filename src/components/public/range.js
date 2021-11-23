import ComponentBase from "../component-base.js";

import css from "dom-css";
import isnumeric from "is-numeric";

import "./range.css";

import { default as LabelPartial } from "../partials/label";
import { default as ValuePartial } from "../partials/value";

export default class Range extends ComponentBase {
    constructor (root, opts, theme) {
        super(root, opts, theme);

        this.scale = opts.scale;

        this.label = LabelPartial(this.container, opts.label, theme);

        this.input = this.container.appendChild(document.createElement("input"));
        this.input.type = "range";
        this.input.classList.add("guify-range");
        // Add ARIA attribute to input based on label text
        if(opts.label) this.input.setAttribute("aria-label", opts.label + " input");

        // Get initial value:
        if (opts.scale === "log") {
            // If logarithmic, we're going to set the slider to a known linear range. Then we'll
            // map that linear range to the user-set range using a log scale.

            // Check if all signs are valid
            if (opts.min * opts.max <= 0) {
                throw new Error("Log range min/max must have the same sign and not equal zero. Got min = " + opts.min + ", max = " + opts.max);
            }

            // Step is invalid for log scale slider
            if (isnumeric(opts.step)) {
                console.warn("Step is unused for log scale sliders.");
            }

            // Warn that `steps` was removed
            if (isnumeric(opts.steps)) {
                console.warn("\"steps\" option for log scale sliders has been removed.");
            }

            // Min/max are forced to a known range, and log value will be derived from slider position within.
            this.minPos = 0;
            this.maxPos = 1000000;

            this.min = Math.log( (isnumeric(opts.min)) ? opts.min : 0.000001 ); // This cannot be 0
            this.max = Math.log( (isnumeric(opts.max)) ? opts.max : 100 );

            this.precision = (isnumeric(opts.precision)) ? opts.precision : 3;
            this.logScale = (this.max - this.min) / (this.maxPos - this.minPos);

            this.initial = isnumeric(opts.initial) ? opts.initial : this.min;

            if (opts.initial < 0) {
                throw new Error(`Log range initial value must be > 0. Got initial value = ${opts.initial}`);
            }
        } else {
            // If linear, this is much simpler. Pos and value can directly match.
            this.minPos = (isnumeric(opts.min)) ? opts.min : 0;
            this.maxPos = (isnumeric(opts.max)) ? opts.max : 100;
            this.min = this.minPos;
            this.max = this.maxPos;

            this.precision = (isnumeric(opts.precision)) ? opts.precision : 3;
            this.step = (isnumeric(opts.step)) ? opts.step : (10 / Math.pow(10, 3)); // Default is the lowest possible number given the precision. When precision = 3, step = 0.01.

            this.initial = isnumeric(opts.initial) ? opts.initial : this.min;

            // Quantize the initial value to the nearest step:
            if (this.step != 0) {
                var initialStep = Math.round((this.initial - this.min) / this.step);
                this.initial = this.min + this.step * initialStep;
            }
        }

        // Set value on the this.input itself:
        this.input.min = this.minPos;
        this.input.max = this.maxPos;
        if (isnumeric(this.step)) {
            this.input.step = this.step;
        }
        this.input.value = this._Position(this.initial);

        css(this.input, {
            width: `calc(100% - ${theme.sizing.labelWidth} - 16% - 0.5em)`
        });

        this.valueComponent = ValuePartial(this.container, this.initial, theme, "16%");
        // Add ARIA attribute to input based on label text
        if(opts.label) this.valueComponent.setAttribute("aria-label", opts.label + " value");

        setTimeout(() => {
            this.emit("initialized", parseFloat(this.input.value));
        });

        this.userIsModifying = false;

        // Gain focus
        this.input.addEventListener("focus", () => {
            this.focused = true;
        });

        // Lose focus
        this.input.addEventListener("blur", () => {
            this.focused = false;
        });

        // Defocus on mouse up (for non-accessibility users)
        this.input.addEventListener("mouseup", () => {
            this.input.blur();
        });

        this.input.oninput = (data) => {
            let position = parseFloat(data.target.value);
            var scaledValue = this._Value(position);
            this.valueComponent.value = this._FormatNumber(scaledValue, this.precision);
            this.emit("input", scaledValue);
        };

        this.valueComponent.onchange = () => {
            let rawValue = this.valueComponent.value;
            if(Number(parseFloat(rawValue)) == rawValue){
                // Input number is valid
                var value = parseFloat(rawValue);

                // Ensure number fits slider properties
                value = this._ValidatedInputValue(value);

                this.valueComponent.value = value;
                this.emit("input", value);
                this.lastValue = value;
            } else {
                // Input number is invalid
                // Go back to before input change
                this.valueComponent.value = this.lastValue;
            }
        };
    }

    /**
     * Calculate value from slider position
     */
    _Value(position) {
        if (this.scale === "log") {
            // Map from slider position range to log value range

            // Map from slider range to min-max value range
            let rangePos = (position - this.minPos) * this.logScale + this.min;
            // Now convert to log space
            return Math.exp(rangePos);
        } else {
            // Position and value are equivalent
            return position;
        }
    }

    /**
     * Calculate slider position from value
     */
    _Position(value) {
        if (this.scale === "log") {
            // Map from log value range to the slider's position range
            return this.minPos + (Math.log(value) - this.min) / this.logScale;
        } else {
            // Value and position are equivalent
            return value;
        }
    }

    _ValidatedInputValue(value) {
        var newValue;
        if (this.scale === "log") {
            // Clamp to input range, turning logmin and logmax back into min/max in linear space
            newValue = Math.min(Math.max(value, Math.exp(this.min)), Math.exp(this.max));
        } else {
            // Clamp to input range
            newValue = Math.min(Math.max(value, this.min), this.max);
            // Quantize to step
            newValue = Math.ceil((newValue - this.min) / this.step) * this.step + this.min;
        }
        return this._FormatNumber(newValue, this.precision);
    }

    SetValue(value) {
        let validated = this._ValidatedInputValue(value);
        if(this.focused !== true) {
            this.valueComponent.value = this._FormatNumber(validated, this.precision);
            this.input.value = this._Position(validated);
            this.lastValue = validated;
        }
    }

    GetValue() {
        return this._Value(this.input.value);
    }

    // Formats the number for display.
    // `opts.precision` lets you customize how many decimal places you want here.
    // The default is 3.
    _FormatNumber(value, precision) {
        // https://stackoverflow.com/a/29249277
        return +parseFloat(value).toFixed(precision);
    }
}
