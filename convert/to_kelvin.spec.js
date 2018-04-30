'use strict';

const toKelvin = require('./to_kelvin').toKelvin;
const expect = require('chai').expect;

describe('To Kelvin conversions', () => {
    describe('"toKelvin"', () => {
        it('should be a function', () => {
            expect(toKelvin).to.be.a('function');
        }),
        it('should return correct value when converting from Fahrenheit', () => {
            let args = { temp: 100, uom: 'f' };
            expect(toKelvin(args)).to.equal(310.9277777777778);
        }),
        it('should return correct value when converting from Celsius', () => {
            let args = { temp: 100, uom: 'c' };
            expect(toKelvin(args)).to.equal(373.15);
        }),
        it('should return correct value when converting from Rankine', () => {
            let args = { temp: 100, uom: 'r' };
            expect(toKelvin(args)).to.equal(55.55555555555556);
        });
    });
});
