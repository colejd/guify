import tinycolor from "tinycolor2";

/**
 * Helpers for parsing and formatting colors used by the `color` component.
 * These are kept free of any DOM dependencies so they can be unit tested.
 */

/**
 * Formats the `color` component understands. `hsb`/`hsba` are aliases of `hsv`/`hsva`
 * that produce `hsb(...)` / `hsba(...)` strings, which is what p5.js expects.
 */
export const COLOR_FORMATS = ["rgb", "rgba", "hex", "hsv", "hsva", "hsb", "hsba", "array"];

/**
 * Validates and normalizes a format string. Defaults to `"rgb"` if none is given.
 *
 * @param {String} [format]
 * @returns {String} The normalized (lowercase) format name
 */
export function NormalizeColorFormat(format) {
    let normalized = (format || "rgb").toString().toLowerCase();
    if (!COLOR_FORMATS.includes(normalized)) {
        throw new Error(`Unknown color format '${format}'. Expected one of: ${COLOR_FORMATS.join(", ")}`);
    }
    return normalized;
}

/**
 * @param {String} format A normalized format name
 * @returns {Boolean} Whether the format carries an alpha channel
 */
export function ColorFormatHasAlpha(format) {
    return format === "rgba" || format === "hsva" || format === "hsba";
}

/**
 * Parses a value in any supported representation into a tinycolor instance.
 * Accepts CSS color strings (`rgb()`, `rgba()`, `#hex`, `hsv()`, `hsva()`, `hsb()`, `hsba()`, named colors, ...),
 * `[r, g, b]` / `[r, g, b, a]` arrays with 0-1 components (the `array` format),
 * and plain objects like `{ r, g, b, a }` or `{ h, s, v, a }`.
 *
 * @param {*} value
 * @returns {tinycolor|null} The parsed color, or `null` if it couldn't be parsed
 */
export function ParseColor(value) {
    if (value === undefined || value === null || value === "") return null;

    if (Array.isArray(value)) {
        if (value.length < 3) return null;
        let color = tinycolor.fromRatio({
            r: parseFloat(value[0]),
            g: parseFloat(value[1]),
            b: parseFloat(value[2]),
            a: value.length > 3 ? parseFloat(value[3]) : 1
        });
        return color.isValid() ? color : null;
    }

    if (typeof value === "string") {
        // p5.js (and many creative coding tools) call the HSV color model "HSB". tinycolor only knows "hsv"/"hsva".
        value = value.trim().replace(/^hsb/i, "hsv");
    }

    let color = tinycolor(value);
    return color.isValid() ? color : null;
}

/**
 * Formats a color in the given format.
 *
 * @param {*} color Anything `ParseColor()` understands
 * @param {String} format A normalized format name
 * @returns {String|Array} The formatted color
 */
export function FormatColor(color, format) {
    let parsed = ParseColor(color);
    if (!parsed) return color;

    let rgb = parsed.toRgb(); // r, g, b are rounded to 0-255; a is 0-1
    let hsv = parsed.toHsv(); // h is 0-360, s and v are 0-1
    let alpha = Math.round(parsed.getAlpha() * 100) / 100;

    let h = Math.round(hsv.h);
    let s = Math.round(hsv.s * 100);
    let v = Math.round(hsv.v * 100);

    switch (format) {
        case "rgb":
            return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
        case "rgba":
            return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
        case "hex":
            return parsed.toHexString();
        case "hsv":
        case "hsb":
            return `${format}(${h}, ${s}%, ${v}%)`;
        case "hsva":
        case "hsba":
            return `${format}(${h}, ${s}%, ${v}%, ${alpha})`;
        case "array":
            return [rgb.r / 255, rgb.g / 255, rgb.b / 255].map((x) => {
                return x.toFixed(2);
            });
        default:
            return parsed.toHexString();
    }
}
