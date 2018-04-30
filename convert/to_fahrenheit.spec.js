'use strict';

const toFahrenheit = require('./to_fahrenheit').toFahrenheit;
const expect = require('chai').expect;

describe('To Fahrenheit conversions', () => {
    describe('"toFahrenheit"', () => {
        it('should be a function', () => {
            expect(toFahrenheit).to.be.a('function');
        }),
        it('should return correct value when converting from Celsius', () => {
            let args = { temp: 100, uom: 'c' };
            expect(toFahrenheit(args)).to.equal(212);
        }),
        it('should return correct value when converting from Kelvin', () => {
            let args = { temp: 200, uom: 'k' };
            expect(toFahrenheit(args)).to.equal(-99.66999999999996);
        }),
        it('should return correct value when converting from Rankine', () => {
            let args = { temp: 400, uom: 'r' };
            expect(toFahrenheit(args)).to.equal(-59.670000000000016);
        });
    });
});
