import EventEmitter from 'wolfy87-eventemitter';
import css from 'dom-css';
import isnumeric from 'is-numeric';

const styles = require('styles/components/range-style.js');

export default class Range extends EventEmitter {
    constructor (root, opts, theme, uuid) {
        super()

        this.opts = opts;

        var container = require('./partials/container')(root, opts.label, theme)
        require('./partials/label')(container, opts.label, theme)

        if (!!opts.step && !!opts.steps) {
            throw new Error('Cannot specify both step and steps. Got step = ' + opts.step + ', steps = ', opts.steps)
        }

        this.input = container.appendChild(document.createElement('input'))
        this.input.type = 'range'
        this.input.className = styles['guify-range'];
        // Add ARIA attribute to input based on label text
        if(opts.label) this.input.setAttribute('aria-label', opts.label + ' input');

        // Get initial value:
        if (opts.scale === 'log') {
            // Get options or set defaults:
            opts.max = (isnumeric(opts.max)) ? opts.max : 100
            opts.min = (isnumeric(opts.min)) ? opts.min : 0.1

            // Check if all signs are valid:
            if (opts.min * opts.max <= 0) {
                throw new Error('Log range min/max must have the same sign and not equal zero. Got min = ' + opts.min + ', max = ' + opts.max)
            } else {
                // Pull these into separate variables so that opts can define the *slider* mapping
                this.logmin = opts.min
                this.logmax = opts.max
                this.logsign = opts.min > 0 ? 1 : -1

                // Got the sign so force these positive:
                this.logmin = Math.abs(this.logmin)
                this.logmax = Math.abs(this.logmax)

                // These are now simply 0-100 to which we map the log range:
                opts.min = 0
                opts.max = 100

                // Step is invalid for a log range:
                if (isnumeric(opts.step)) {
                    throw new Error('Log may only use steps (integer number of steps), not a step value. Got step =' + opts.step)
                }
                // Default step is simply 1 in linear slider space:
                opts.step = 1
            }

            opts.initial = this.InverseScaleValue(isnumeric(opts.initial) ? opts.initial : scaleValue((opts.min + opts.max) * 0.5))

            if (opts.initial * this.InverseScaleValue(opts.max) <= 0) {
                throw new Error('Log range initial value must have the same sign as min/max and must not equal zero. Got initial value = ' + opts.initial)
            }
        } else {
            // If linear, this is much simpler:
            opts.max = (isnumeric(opts.max)) ? opts.max : 100
            opts.min = (isnumeric(opts.min)) ? opts.min : 0
            opts.step = (isnumeric(opts.step)) ? opts.step : (opts.max - opts.min) / 100

            opts.initial = isnumeric(opts.initial) ? opts.initial : (opts.min + opts.max) * 0.5
        }

        // If we got a number of steps, use that instead:
        if (isnumeric(opts.steps)) {
            opts.step = isnumeric(opts.steps) ? (opts.max - opts.min) / opts.steps : opts.step
        }

        // Quantize the initial value to the requested step:
        var initialStep = Math.round((opts.initial - opts.min) / opts.step)
        opts.initial = opts.min + opts.step * initialStep

        // Set value on the this.input itself:
        this.input.min = opts.min
        this.input.max = opts.max
        this.input.step = opts.step
        this.input.value = opts.initial

        css(this.input, {
            width: `calc(100% - ${theme.sizing.labelWidth} - 16% - 0.5em)`
        })

        this.valueComponent = require('./partials/value')(container, this.ScaleValue(opts.initial), theme, '16%');
        // Add ARIA attribute to input based on label text
        if(opts.label) this.valueComponent.setAttribute('aria-label', opts.label + ' value');

        setTimeout(() => {
            this.emit('initialized', parseFloat(this.input.value))
        })

        this.userIsModifying = false;

        // Gain focus
        this.input.addEventListener('focus', () => {
            this.focused = true;
        });

        // Lose focus
        this.input.addEventListener('blur', () => {
            this.focused = false;
        });

        // Defocus on mouse up (for non-accessibility users)
        this.input.addEventListener('mouseup', () => {
            this.input.blur();
        });

        this.input.oninput = (data) => {
            var scaledValue = this.ScaleValue(parseFloat(data.target.value))
            this.valueComponent.value = this.FormatNumber(scaledValue);
            this.lastValue = scaledValue;
            this.emit('input', scaledValue)
        }

        this.valueComponent.onchange = () => {
            let rawValue = this.valueComponent.value;
            if(Number(parseFloat(rawValue)) == rawValue){
                // Input number is valid
                var value = parseFloat(rawValue);
                // Clamp to input range
                value = Math.min(Math.max(value, opts.min), opts.max);
                value = Math.ceil((value - opts.min) / opts.step ) * opts.step + opts.min;

                this.valueComponent.value = value;
                this.emit('input', value);
            } else {
                // Input number is invalid
                // Go back to before input change
                this.valueComponent.value = this.lastValue;
            }
        }

    }

    ScaleValue(value) {
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

    SetValue(value) {
        if(this.focused !== true) {
            this.valueComponent.value = this.FormatNumber(value);
            this.input.value = this.InverseScaleValue(value);
            this.lastValue = this.input.value;
        }
    }

    GetValue() {
        return this.input.value;
    }

    FormatNumber(value) {
        // https://stackoverflow.com/a/29249277
        return value.toFixed(3).replace(/\.?0*$/,'');
    }
}
