'use strict';

const tempConversion = require('./index').tempConversion;
const expect = require('chai').expect;

describe('Conversion targets', () => {
    describe('"tempConversion"', () => {
        it('should be a function', () => {
            expect(tempConversion).to.be.a('function');
        }),
        it('should convert to Celsius when given Celsius as the target', () => {
            let args = { temp: 212, uom: 'f', target: 'c' };
            expect(tempConversion(args)).to.equal(100);
        }),
        it('should convert to Fahrenheit when given Fahrenheit as the target', () => {
            let args = { temp: 100, uom: 'c', target: 'f' };
            expect(tempConversion(args)).to.equal(212);
        }),
        it('should convert to Kelvin when given Kelvin as the target', () => {
            let args = { temp: 100, uom: 'c', target: 'k' };
            expect(tempConversion(args)).to.equal(373.15);
        }),
        it('should convert to Rankine when given Rankine as the target', () => {
            let args = { temp: 212, uom: 'f', target: 'r' };
            expect(tempConversion(args)).to.equal(671.6700000000001);
        });
    });
});