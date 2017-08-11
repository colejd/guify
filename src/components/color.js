var EventEmitter = require('wolfy87-eventemitter')
var ColorPicker = require('simple-color-picker')
var css = require('dom-css')
var tinycolor = require('tinycolor2')

import styles from '../scss/components/color.scss';

export default class Color extends EventEmitter {
    constructor (root, opts, theme, uuid) {
        super();

        opts.format = opts.format || 'rgb'
        opts.initial = opts.initial || '#123456'

        var container = require('./partials/container')(root, opts.label)
        require('./partials/label')(container, opts.label, theme)

        var icon = container.appendChild(document.createElement('span'))
        icon.className = 'guify-color-' + uuid

        var value = require('./partials/value')(container, '', theme, '46%')

        icon.onmouseover = function () {
            picker.$el.style.display = ''
        }

        var initial = opts.initial
        switch (opts.format) {
            case 'rgb':
                initial = tinycolor(initial).toHexString()
                break
            case 'hex':
                initial = tinycolor(initial).toHexString()
                break
            case 'array':
                initial = tinycolor.fromRatio({r: initial[0], g: initial[1], b: initial[2]}).toHexString()
                break
            default:
                break
        }

        var picker = new ColorPicker({
            el: icon,
            color: initial,
            background: theme.background1,
            width: 125,
            height: 100
        })

        css(picker.$el, {
            marginTop: '20px',
            display: 'none',
            position: 'absolute'
        })

        css(icon, {
            position: 'relative',
            display: 'inline-block',
            width: '12.5%',
            height: '20px',
            backgroundColor: picker.getHexString()
        })

        icon.onmouseout = (e) => {
            picker.$el.style.display = 'none'
        }

        setTimeout(() => {
            this.emit('initialized', initial)
        })

        picker.onChange((hex) => {
            value.innerHTML = format(hex)
            css(icon, {backgroundColor: hex})
            this.emit('input', format(hex))
        })

        function format (hex) {
            switch (opts.format) {
            case 'rgb':
                return tinycolor(hex).toRgbString()
            case 'hex':
                return tinycolor(hex).toHexString()
            case 'array':
                var rgb = tinycolor(hex).toRgb()
                return [rgb.r / 255, rgb.g / 255, rgb.b / 255].map((x) => {
                    return x.toFixed(2)
                })
            default:
                return hex
            }
        }
    }
}
