'use strict';

const toRankine = require('./to_rankine').toRankine;
const expect = require('chai').expect;

describe('To Rankine conversions', () => {
    describe('"toRankine"', () => {
        it('should be a function', () => {
            expect(toRankine).to.be.a('function');
        }),
        it('should return correct value when converting from Fahrenheit', () => {
            let args = { temp: 0, uom: 'f' };
            expect(toRankine(args)).to.equal(459.67);
        }),
        it('should return correct value when converting from Kelvin', () => {
            let args = { temp: 100, uom: 'k' };
            expect(toRankine(args)).to.equal(180);
        }),
        it('should return correct value when converting from Celsius', () => {
            let args = { temp: 0, uom: 'c' };
            expect(toRankine(args)).to.equal(491.66999999999996);
        });
    });
});
