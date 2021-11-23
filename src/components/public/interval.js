import ComponentBase from "../component-base.js";

import css from "dom-css";
import isnumeric from "is-numeric";

import "./interval.css";

import { default as LabelPartial } from "../partials/label";
import { default as ValuePartial } from "../partials/value";

import { lerp } from "../../utils/math-utils";

function clamp(x, min, max)
{
    return Math.min(Math.max(x, min), max);
}

export default class Interval extends ComponentBase {
    constructor (root, opts, theme) {
        super(root, opts, theme);

        this.label = LabelPartial(this.container, opts.label, theme);

        if (!!opts.step && !!opts.steps) {
            throw new Error("Cannot specify both step and steps. Got step = " + opts.step + ", steps = ", opts.steps);
        }

        this.input = this.container.appendChild(document.createElement("span"));
        this.input.classList.add("guify-interval");

        this.handle = document.createElement("span");
        this.handle.classList.add("guify-interval-handle");
        this.input.appendChild(this.handle);


        if (!Array.isArray(opts.initial))
        {
            opts.initial = [];
        }

        this.scale = opts.scale;

        // Get initial value:
        if( opts.scale === "log" )
        {
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

            this.initial = [
                isnumeric(opts.initial[0]) ? opts.initial[0] : this.min,
                isnumeric(opts.initial[1]) ? opts.initial[1] : this.max,
            ];
        }
        else
        {
            // If linear, this is much simpler. Pos and value can directly match.
            this.minPos = (isnumeric(opts.min)) ? opts.min : 0;
            this.maxPos = (isnumeric(opts.max)) ? opts.max : 100;
            this.min = this.minPos;
            this.max = this.maxPos;

            this.precision = (isnumeric(opts.precision)) ? opts.precision : 3;
            this.step = (isnumeric(opts.step)) ? opts.step : (10 / Math.pow(10, 3)); // Default is the lowest possible number given the precision. When precision = 3, step = 0.01.

            this.initial = [
                isnumeric(opts.initial[0]) ? opts.initial[0] : this.min,
                isnumeric(opts.initial[1]) ? opts.initial[1] : this.max,
            ];

            // Quantize the initial value to the nearest step:
            if (this.step != 0) {
                this.initial = this.initial.map((value) => {
                    return this.min + this.step * Math.round((value - this.min) / this.step);
                });
            }
        }

        this.value = opts.initial;

        // Set handle positions from value
        this._RefreshHandles();

        // Display the values:
        this.lValue = ValuePartial(this.container, this.value[0], theme, "11%", true);
        this.rValue = ValuePartial(this.container, this.value[1], theme, "11%", false);

        // Add ARIA attribute to input based on label text
        if(opts.label) this.lValue.setAttribute("aria-label", opts.label + " lower value");
        if(opts.label) this.lValue.setAttribute("aria-label", opts.label + " upper value");

        // An index to track what's being dragged:
        this.activeIndex = -1;

        setTimeout(() => {
            this.emit("initialized", this.value);
        });

        // // Gain focus
        // this.input.addEventListener("focus", () => {
        //     this.focused = true;
        // });

        // // Lose focus
        // this.input.addEventListener("blur", () => {
        //     this.focused = false;
        // });

        let mouseX = (ev) =>
        {
            // Get mouse position in page coords relative to the container:
            return ev.pageX - this.input.getBoundingClientRect().left;
        };

        let mouseMoveListener = ( ev ) =>
        {
            let fraction = clamp(mouseX(ev) / this.input.offsetWidth, 0, 1);

            this._SetFromMousePosition(fraction);
        };

        let mouseUpListener = ( ev ) =>
        {
            let fraction = clamp(mouseX(ev) / this.input.offsetWidth, 0, 1);

            this._SetFromMousePosition(fraction);

            document.removeEventListener("mousemove", mouseMoveListener);
            document.removeEventListener("mouseup", mouseUpListener);

            this.activeIndex = -1;
        };

        this.input.addEventListener("mousedown", (ev) =>
        {
            // Get mouse position fraction:
            let fraction = clamp(mouseX(ev) / this.input.offsetWidth, 0, 1);

            let posForLeftValue = this._Position(this.value[0]);
            let posForRightValue = this._Position(this.value[1]);

            // Get the current fraction of position --> [0, 1]:
            let lofrac = (posForLeftValue - this.minPos) / (this.maxPos - this.minPos);
            let hifrac = (posForRightValue - this.minPos) / (this.maxPos - this.minPos);

            // This is just for making decisions, so perturb it ever
            // so slightly just in case the bounds are numerically equal:
            lofrac -= Math.abs(this.maxPos - this.minPos) * 1e-15;
            hifrac += Math.abs(this.maxPos - this.minPos) * 1e-15;

            // Figure out which is closer:
            let lodiff = Math.abs(lofrac - fraction);
            let hidiff = Math.abs(hifrac - fraction);

            this.activeIndex = lodiff < hidiff ? 0 : 1;

            console.log(this.activeIndex);

            // Attach this to *document* so that we can still drag if the mouse
            // passes outside the container:
            document.addEventListener("mousemove", mouseMoveListener);
            document.addEventListener("mouseup", mouseUpListener);
        });

        // Defocus on mouse up (for non-accessibility users)
        this.input.addEventListener("mouseup", () => {
            this.input.blur();
        });

        this.input.oninput = () => {
            // let position = parseFloat(data.target.value);
            // var scaledValue = this._Value(position);
            // this.valueComponent.value = this._RoundNumber(scaledValue, this.precision);
            this.lValue.value = this.value[0];
            this.rValue.value = this.value[1];
            this.emit("input", this.value);
        };

        // Handle lower bound input box changes
        this.lValue.onchange = () => {
            let rawValue = this.lValue.value;
            let otherValue = parseFloat(this.rValue.value);
            if (Number(parseFloat(rawValue)) == rawValue) {
                let min = (this.scale == "log") ? Math.exp(this.min) : this.min;
                let max = (this.scale == "log") ? Math.exp(this.max) : this.max;

                // Input number is valid
                var value = parseFloat(rawValue);
                // Clamp to input range
                value = Math.min(Math.max(value, min), max);
                // Map to nearest step
                if (this.step) {
                    value = Math.ceil((value - min) / this.step ) * this.step + min;
                }
                // Prevent value from going beyond interval upper value
                value = Math.min(value, otherValue);

                value = this._RoundNumber(value, this.precision);

                this.lValue.value = value;
                this.value = [value, otherValue];
                this.emit("input", [value, otherValue]);
                this._RefreshHandles([value, otherValue]);
            } else {
                // Input number is invalid
                // Go back to before input change
                this.lValue.value = this.lastValue[0];
            }
        };

        // Handle upper bound input box changes
        this.rValue.onchange = () => {
            let rawValue = this.rValue.value;
            let otherValue = parseFloat(this.lValue.value);
            if (Number(parseFloat(rawValue)) == rawValue) {
                let min = (this.scale == "log") ? Math.exp(this.min) : this.min;
                let max = (this.scale == "log") ? Math.exp(this.max) : this.max;

                // Input number is valid
                var value = parseFloat(rawValue);
                // Clamp to input range
                value = Math.min(Math.max(value, min), max);

                // Map to nearest step
                if (this.step) {
                    value = Math.ceil((value - min) / this.step ) * this.step + min;
                }
                // Prevent value from going below interval lower value
                value = Math.max(value, otherValue);

                value = this._RoundNumber(value, this.precision);

                this.rValue.value = value;
                this.value = [otherValue, value];
                this.emit("input", [otherValue, value]);
                this._RefreshHandles();
            } else {
                // Input number is invalid
                // Go back to before input change
                this.rValue.value = this.lastValue[1];
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

    /**
     * Updates the current value given a mouse X position normalized from 0 to 1.
     */
    _SetFromMousePosition( fraction )
    {
        if (this.activeIndex === -1) {
            return;
        }

        // Clip against the other bound:
        if (this.activeIndex === 0) {
            // Get the right side in position-space [0, 1]:
            let hifrac = (this._Position(this.value[1]) - this.minPos) / (this.maxPos - this.minPos);
            // Prevent fraction from exceeding right-side position
            fraction = Math.min(hifrac, fraction);
        } else {
            // Get the right side in position-space [0, 1]:
            let lofrac = (this._Position(this.value[0]) - this.minPos) / (this.maxPos - this.minPos);
            // Prevent fraction from going below left-side position
            fraction = Math.max(lofrac, fraction);
        }

        // Map from 0-1 scale to position-scale
        let position = lerp(this.minPos, this.maxPos, fraction);
        // Map from position-scale to value-scale and assign to values
        var newValue = this._Value(position);

        // Quantize the value
        if (this.step) {
            newValue = this.min + this.step * Math.round((newValue - this.min) / this.step);
        }

        this.value[this.activeIndex] = this._RoundNumber(newValue, this.precision);

        // Update and send the event:
        this._RefreshHandles();
        this.input.oninput();
    }

    SetValue( value )
    {
        if(this.focused !== true)
        {
            this.lValue.value = this._RoundNumber(parseFloat(value[0]), this.precision);
            this.rValue.value = this._RoundNumber(parseFloat(value[1]), this.precision);

            this.lastValue = [ parseFloat(value[0]), parseFloat(value[1]) ];
        }
    }

    // Formats the number for display.
    // `opts.precision` lets you customize how many decimal places you want here at most.
    // The default is 3.
    _RoundNumber(value, precision) {
        // https://stackoverflow.com/a/12830454/7138792
        return +parseFloat(value).toFixed(precision);
    }

    GetValue() {
        return [ this.lValue.value, this.rValue.value ];
    }

    _RefreshHandles() {
        let leftPercent = ((this._Position(this.value[0]) - this.minPos) / (this.maxPos - this.minPos)) * 100;
        let rightPercent = 100 - (((this._Position(this.value[1]) - this.minPos) / (this.maxPos - this.minPos)) * 100);
        css(this.handle, {
            left: `${leftPercent}%`,
            right: `${rightPercent}%`,
        });
    }
}
