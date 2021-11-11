import EventEmitter from 'wolfy87-eventemitter';
import css from 'dom-css';
import isnumeric from 'is-numeric';

import { default as styles } from 'styles/components/interval-style.js';

import { default as ContainerPartial } from './partials/container';
import { default as LabelPartial } from './partials/label';
import { default as ValuePartial } from './partials/value';

function clamp(x, min, max)
{
    return Math.min(Math.max(x, min), max)
}

export default class Interval extends EventEmitter {
    constructor (root, opts, theme, uuid) {
        super()

        this.opts = opts;

        this.container = ContainerPartial(root, opts.label, theme)
        this.label = LabelPartial(this.container, opts.label, theme)

        if (!!opts.step && !!opts.steps) {
            throw new Error('Cannot specify both step and steps. Got step = ' + opts.step + ', steps = ', opts.steps)
        }

        this.input = this.container.appendChild(document.createElement('span'));
        this.input.className = styles(theme)['guify-interval'];

        this.handle = document.createElement("span");
        this.handle.className = styles(theme)['guify-interval-handle'];
        this.input.appendChild(this.handle);


        if (!Array.isArray(opts.initial))
        {
            opts.initial = []
        }

        if( opts.scale === "log" )
        {
            // Get options or set defaults:
            opts.max = (isnumeric(opts.max)) ? opts.max : 100;
            opts.min = (isnumeric(opts.min)) ? opts.min : 0.1;

            // Check if all signs are valid:
            if (opts.min * opts.max <= 0)
            {
                throw new Error('Log range min/max must have the same sign and not equal zero. Got min = ' + opts.min + ', max = ' + opts.max);
            }
            else
            {
                // Pull these into separate variables so that opts can define the *slider* mapping
                this.logmin = opts.min;
                this.logmax = opts.max;
                this.logsign = opts.min > 0 ? 1 : -1;

                // Got the sign so force these positive:
                this.logmin = Math.abs(this.logmin);
                this.logmax = Math.abs(this.logmax);

                // These are now simply 0-100 to which we map the log range:
                opts.min = 0;
                opts.max = 100;

                // Step is invalid for a log range:
                if (isnumeric(opts.step))
                {
                    throw new Error('Log may only use steps (integer number of steps), not a step value. Got step =' + opts.step);
                }
                // Default step is simply 1 in linear slider space:
                opts.step = 1;
            }

            opts.initial = [
                this.InverseScaleValue(isnumeric(opts.initial) ? opts.initial[0] : scaleValue(opts.min + (opts.max - opts.min) * 0.25)),
                this.InverseScaleValue(isnumeric(opts.initial) ? opts.initial[1] : scaleValue(opts.min + (opts.max - opts.min) * 0.75))
            ];
            if (this.ScaleValue(opts.initial[0]) * this.ScaleValue(opts.max) <= 0 || scaleValue(opts.initial[1]) * this.ScaleValue(opts.max) <= 0) {
                throw new Error('Log range initial value must have the same sign as min/max and must not equal zero. Got initial value = [' + this.ScaleValue(opts.initial[0]) + ', ' + this.ScaleValue(opts.initial[1]) + ']');
            }
        }
        else
        {
            // If linear, this is much simpler:
            opts.max = (isnumeric(opts.max)) ? opts.max : 100;
            opts.min = (isnumeric(opts.min)) ? opts.min : 0;
            opts.step = (isnumeric(opts.step)) ? opts.step : 0.01;

            opts.initial = [
                isnumeric(opts.initial[0]) ? opts.initial[0] : (opts.min + opts.max) * 0.25,
                isnumeric(opts.initial[1]) ? opts.initial[1] : (opts.min + opts.max) * 0.75
            ];
        }

        // If we got a number of steps, use that instead:
        if (isnumeric(opts.steps))
        {
            opts.step = isnumeric(opts.steps) ? (opts.max - opts.min) / opts.steps : opts.step
        }

        // Quantize the initial value to the requested step:
        opts.initial[0] = opts.min + opts.step * Math.round((opts.initial[0] - opts.min) / opts.step)
        opts.initial[1] = opts.min + opts.step * Math.round((opts.initial[1] - opts.min) / opts.step)

        this.value = opts.initial;

        css(this.handle, {
            left: ((this.value[0] - opts.min) / (opts.max - opts.min) * 100) + '%',
            right: (100 - (this.value[1] - opts.min) / (opts.max - opts.min) * 100) + '%'
        });

        // Display the values:
        this.lValue = ValuePartial(this.container, this.ScaleValue(opts.initial[0]), theme, '11%', true);
        this.rValue = ValuePartial(this.container, this.ScaleValue(opts.initial[1]), theme, '11%',);

        // Add ARIA attribute to input based on label text
        if(opts.label) this.lValue.setAttribute('aria-label', opts.label + ' lower value');
        if(opts.label) this.lValue.setAttribute('aria-label', opts.label + ' upper value');

        // An index to track what's being dragged:
        this.activeIndex = -1;

        setTimeout( () => {
            let scaledLValue = this.ScaleValue(this.value[0]);
            let scaledRValue = this.ScaleValue(this.value[1]);
            this.lValue.innerHTML = scaledLValue;
            this.rValue.innerHTML = scaledRValue;
            this.emit('initialized', [scaledLValue, scaledRValue]);
        });

        // Gain focus
        this.input.addEventListener('focus', () => {
            this.focused = true;
        });

        // Lose focus
        this.input.addEventListener('blur', () => {
            this.focused = false;
        });

        let mouseX = (ev) =>
        {
            // Get mouse position in page coords relative to the container:
            return ev.pageX - this.input.getBoundingClientRect().left;
        }

        let mouseMoveListener = ( ev ) =>
        {
            let fraction = clamp(mouseX(ev) / this.input.offsetWidth, 0, 1);

            this.setActiveValue(fraction);
        }

        let mouseUpListener = ( ev ) =>
        {
            let fraction = clamp(mouseX(ev) / this.input.offsetWidth, 0, 1);

            this.setActiveValue(fraction);

            document.removeEventListener('mousemove', mouseMoveListener);
            document.removeEventListener('mouseup', mouseUpListener);

            this.activeIndex = -1;
        }

        this.input.addEventListener('mousedown', (ev) =>
        {
            // Get mouse position fraction:
            let fraction = clamp(mouseX(ev) / this.input.offsetWidth, 0, 1);

            // Get the current fraction of position --> [0, 1]:
            let lofrac = (this.value[0] - opts.min) / (opts.max - opts.min);
            let hifrac = (this.value[1] - opts.min) / (opts.max - opts.min);

            // This is just for making decisions, so perturb it ever
            // so slightly just in case the bounds are numerically equal:
            lofrac -= Math.abs(opts.max - opts.min) * 1e-15;
            hifrac += Math.abs(opts.max - opts.min) * 1e-15;

            // Figure out which is closer:
            let lodiff = Math.abs(lofrac - fraction);
            let hidiff = Math.abs(hifrac - fraction);

            this.activeIndex = lodiff < hidiff ? 0 : 1;

            console.log(this.activeIndex);

            // Attach this to *document* so that we can still drag if the mouse
            // passes outside the container:
            document.addEventListener('mousemove', mouseMoveListener);
            document.addEventListener('mouseup', mouseUpListener);
        });

        // Defocus on mouse up (for non-accessibility users)
        this.input.addEventListener('mouseup', () => {
            this.input.blur();
        });

        this.input.oninput = () => {
            let scaledLValue = this.ScaleValue(this.value[0]);
            let scaledRValue = this.ScaleValue(this.value[1]);
            this.lValue.value = scaledLValue;
            this.rValue.value = scaledRValue;
            this.emit('input', [scaledLValue, scaledRValue]);
        };

        // Handle lower bound input box changes
        this.lValue.onchange = () => {
            let rawValue = this.lValue.value;
            let otherValue = parseFloat(this.rValue.value);
            if(Number(parseFloat(rawValue)) == rawValue){
                // Input number is valid
                var value = parseFloat(rawValue);
                // Clamp to input range
                value = Math.min(Math.max(value, opts.min), opts.max);
                // Map to nearest step
                value = Math.ceil((value - opts.min) / opts.step ) * opts.step + opts.min;
                // Prevent value from going beyond interval upper value
                value = Math.min(value, otherValue);

                this.lValue.value = value;
                this.emit('input', [value, otherValue]);
                this.RefreshHandle([value, otherValue]);
            } else {
                // Input number is invalid
                // Go back to before input change
                this.lValue.value = this.lastValue[0];
            }
        }

        // Handle upper bound input box changes
        this.rValue.onchange = () => {
            let rawValue = this.rValue.value;
            let otherValue = parseFloat(this.lValue.value);
            if(Number(parseFloat(rawValue)) == rawValue){
                // Input number is valid
                var value = parseFloat(rawValue);
                // Clamp to input range
                value = Math.min(Math.max(value, opts.min), opts.max);
                // Map to nearest step
                value = Math.ceil((value - opts.min) / opts.step ) * opts.step + opts.min;
                // Prevent value from going below interval lower value
                value = Math.max(value, otherValue);

                this.rValue.value = value;
                this.emit('input', [otherValue, value]);
                this.RefreshHandle([otherValue, value]);
            } else {
                // Input number is invalid
                // Go back to before input change
                this.rValue.value = this.lastValue[1];
            }
        }
    }

    ScaleValue(value)
    {
        if (this.opts.scale === 'log')
            return this.logsign * Math.exp(Math.log(this.logmin) + (Math.log(this.logmax) - Math.log(this.logmin)) * value / 100);
        else
            return value;
    }

    InverseScaleValue(value) {
        if (this.opts.scale === 'log')
            return (Math.log(value * this.logsign) - Math.log(this.logmin)) * 100 / (Math.log(this.logmax) - Math.log(this.logmin));
        else
            return value;
    }

    setActiveValue( fraction )
    {
        if (this.activeIndex === -1) {
            return
        }

        let opts = this.opts;

        // Get the position in the range [0, 1]:
        let lofrac = (this.value[0] - opts.min) / (opts.max - opts.min)
        let hifrac = (this.value[1] - opts.min) / (opts.max - opts.min)

        // Clip against the other bound:
        if (this.activeIndex === 0)
        {
            fraction = Math.min(hifrac, fraction);
        }
        else
        {
            fraction = Math.max(lofrac, fraction);
        }

        // Compute and quantize the new value:
        let newValue = opts.min + Math.round((opts.max - opts.min) * fraction / opts.step) * opts.step

        // Update value, in linearized coords:
        this.value[this.activeIndex] = newValue;

        // Update and send the event:
        css(this.handle, {
            left: ((this.value[0] - opts.min) / (opts.max - opts.min) * 100) + '%',
            right: (100 - (this.value[1] - opts.min) / (opts.max - opts.min) * 100) + '%'
        });
        this.input.oninput();
    }

    SetValue( value )
    {
        if(this.focused !== true)
        {
            this.lValue.value = this.FormatNumber(value[0]);
            this.rValue.value = this.FormatNumber(value[1]);

            this.lastValue = [ this.lValue.value, this.rValue.value ];
        }
    }

    FormatNumber(value) {
        // https://stackoverflow.com/a/29249277
        return value.toFixed(3).replace(/\.?0*$/,'');
    }

    GetValue() {
        return [ this.lValue.value, this.rValue.value ];
    }

    RefreshHandle(interval) {
        let leftPercent = ((parseFloat(interval[0]) - this.opts.min) / (this.opts.max - this.opts.min) * 100);
        let rightPercent = (100 - (parseFloat(interval[1]) - this.opts.min) / (this.opts.max - this.opts.min) * 100);
        css(this.handle, {
            left: leftPercent + '%',
            right: rightPercent + '%'
        });
    }
}
