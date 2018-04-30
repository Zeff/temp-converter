'use strict';

const toCelsius = require('./to_celsius').toCelsius;
const expect = require('chai').expect;

describe('To Celsius conversions', () => {
    describe('"toCelsius"', () => {
        it('should be a function', () => {
            expect(toCelsius).to.be.a('function');
        }),
        it('should return correct value when converting from Fahrenheit', () => {
            let args = { temp: 212, uom: 'f' };
            expect(toCelsius(args)).to.equal(100);
        }),
        it('should return correct value when converting from Kelvin', () => {
            let args = { temp: 273.15, uom: 'k' };
            expect(toCelsius(args)).to.equal(0);
        }),
        it('should return correct value when converting from Rankine', () => {
            let args = { temp: 500, uom: 'r' };
            expect(toCelsius(args)).to.equal(4.627777777777768);
        });
    });
});
