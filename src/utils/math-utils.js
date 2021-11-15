
/**
     * Linearly interpolates `t` between `v0` and `v1`.
     * https://en.wikipedia.org/wiki/Linear_interpolation
     * @param {*} v0 Lower bound
     * @param {*} v1 Upper bound
     * @param {*} t Progress (value between 0 and 1)
     * @returns Mapped number
     */
function lerp(v0, v1, t) {
    return (1 - t) * v0 + t * v1;
}

export { lerp };