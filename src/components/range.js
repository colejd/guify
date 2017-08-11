var EventEmitter = require('wolfy87-eventemitter');
var css = require('dom-css');
var isnumeric = require('is-numeric');

import styles from '../scss/components/range.scss';

export default class Range extends EventEmitter {
    constructor (root, opts, theme, uuid) {
        super()

        let scaleValue, scaleValueInverse, logmin, logmax, logsign;

        var container = require('./partials/container')(root, opts.label)
        require('./partials/label')(container, opts.label, theme)

        if (!!opts.step && !!opts.steps) {
            throw new Error('Cannot specify both step and steps. Got step = ' + opts.step + ', steps = ', opts.steps)
        }

        var input = container.appendChild(document.createElement('input'))
        input.type = 'range'
        input.className = 'guify-range'

        // Create scale functions for converting to/from the desired scale:
        if (opts.scale === 'log') {
            scaleValue = function (x) {
            return logsign * Math.exp(Math.log(logmin) + (Math.log(logmax) - Math.log(logmin)) * x / 100)
            }
            scaleValueInverse = function (y) {
            return (Math.log(y * logsign) - Math.log(logmin)) * 100 / (Math.log(logmax) - Math.log(logmin))
            }
        } else {
            scaleValue = scaleValueInverse = function (x) { return x }
        }

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
            logmin = opts.min
            logmax = opts.max
            logsign = opts.min > 0 ? 1 : -1

            // Got the sign so force these positive:
            logmin = Math.abs(logmin)
            logmax = Math.abs(logmax)

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

            opts.initial = scaleValueInverse(isnumeric(opts.initial) ? opts.initial : scaleValue((opts.min + opts.max) * 0.5))

            if (opts.initial * scaleValueInverse(opts.max) <= 0) {
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

        // Set value on the input itself:
        input.min = opts.min
        input.max = opts.max
        input.step = opts.step
        input.value = opts.initial

        css(input, {
            width: '47.5%'
        })

        var value = require('./partials/value')(container, scaleValue(opts.initial), theme, '11%')

        setTimeout(() => {
            this.emit('initialized', parseFloat(input.value))
        })

        input.oninput = (data) => {
            var scaledValue = scaleValue(parseFloat(data.target.value))
            value.innerHTML = scaledValue
            this.emit('input', scaledValue)
        }
    }
}
