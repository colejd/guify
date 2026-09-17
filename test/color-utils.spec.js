/* global describe, it */

import chai from "chai";
import { NormalizeColorFormat, ColorFormatHasAlpha, ParseColor, FormatColor } from "../src/utils/color-utils.js";

const expect = chai.expect;

describe("color-utils", () => {

    describe("NormalizeColorFormat()", () => {
        it("defaults to rgb", () => {
            expect(NormalizeColorFormat(undefined)).to.equal("rgb");
        });
        it("lowercases the format", () => {
            expect(NormalizeColorFormat("HSB")).to.equal("hsb");
        });
        it("throws on unknown formats", () => {
            expect(() => NormalizeColorFormat("cmyk")).to.throw(/Unknown color format/);
        });
    });

    describe("ColorFormatHasAlpha()", () => {
        it("is true only for the alpha formats", () => {
            expect(ColorFormatHasAlpha("rgba")).to.equal(true);
            expect(ColorFormatHasAlpha("hsva")).to.equal(true);
            expect(ColorFormatHasAlpha("hsba")).to.equal(true);
            expect(ColorFormatHasAlpha("rgb")).to.equal(false);
            expect(ColorFormatHasAlpha("hex")).to.equal(false);
            expect(ColorFormatHasAlpha("array")).to.equal(false);
        });
    });

    describe("ParseColor()", () => {
        it("parses rgb, rgba and hex strings", () => {
            expect(ParseColor("rgb(255, 0, 0)").toHexString()).to.equal("#ff0000");
            expect(ParseColor("rgba(255, 0, 0, 0.5)").getAlpha()).to.equal(0.5);
            expect(ParseColor("#00ff00").toHexString()).to.equal("#00ff00");
        });
        it("parses hsv and p5-style hsb strings", () => {
            expect(ParseColor("hsv(120, 100%, 100%)").toHexString()).to.equal("#00ff00");
            expect(ParseColor("hsb(240, 100%, 100%)").toHexString()).to.equal("#0000ff");
            expect(ParseColor("hsba(240, 100%, 100%, 0.25)").getAlpha()).to.equal(0.25);
        });
        it("parses 0-1 arrays", () => {
            expect(ParseColor([1, 0, 0]).toHexString()).to.equal("#ff0000");
            expect(ParseColor([0, 0, 1, 0.5]).getAlpha()).to.equal(0.5);
        });
        it("returns null for junk", () => {
            expect(ParseColor(null)).to.equal(null);
            expect(ParseColor("not a color")).to.equal(null);
            expect(ParseColor([1])).to.equal(null);
        });
    });

    describe("FormatColor()", () => {
        it("formats rgb", () => {
            expect(FormatColor("#ff0000", "rgb")).to.equal("rgb(255, 0, 0)");
        });
        it("formats rgba, always including the alpha channel", () => {
            expect(FormatColor("#ff0000", "rgba")).to.equal("rgba(255, 0, 0, 1)");
            expect(FormatColor("rgba(255, 0, 0, 0.5)", "rgba")).to.equal("rgba(255, 0, 0, 0.5)");
        });
        it("formats hex", () => {
            expect(FormatColor("rgb(0, 255, 0)", "hex")).to.equal("#00ff00");
        });
        it("formats hsv / hsb using the requested name", () => {
            expect(FormatColor("#0000ff", "hsv")).to.equal("hsv(240, 100%, 100%)");
            expect(FormatColor("#0000ff", "hsb")).to.equal("hsb(240, 100%, 100%)");
        });
        it("formats hsva / hsba, always including the alpha channel", () => {
            expect(FormatColor("#0000ff", "hsva")).to.equal("hsva(240, 100%, 100%, 1)");
            expect(FormatColor("rgba(0, 0, 255, 0.5)", "hsba")).to.equal("hsba(240, 100%, 100%, 0.5)");
        });
        it("formats arrays as 0-1 components", () => {
            expect(FormatColor("#ff0000", "array")).to.deep.equal(["1.00", "0.00", "0.00"]);
        });
        it("round-trips through p5-style strings", () => {
            let hsba = FormatColor("rgba(12, 34, 56, 0.4)", "hsba");
            expect(FormatColor(hsba, "rgba")).to.equal("rgba(12, 34, 56, 0.4)");
        });
    });
});
