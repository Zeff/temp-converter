'use strict';

const validation = require('./validate');
const expect = require('chai').expect;

describe('Validation data', () => {
    describe('"validateArgs"', () => {
        it('should be a function', () => {
            expect(validation.validateArgs).to.be.a('function');
        }),
        it('should return true when arguments are valid', () => {
            let argv = { temp: 100.1, uom: 'f', target: 'c', answer: 'dog'};
            expect(validation.validateArgs(argv)).to.equal(true);
        }),
        describe('"temp"', () => {
            it('should return invalid when temp is a string', () => {
                let argv = { temp: 'foo', uom: 'f', target: 'c', answer: 'dog'};
                expect(validation.validateArgs(argv)).to.equal('invalid');
            }),
            it('should return invalid when temp is not a number', () => {
                let argv = { temp: null, uom: 'f', target: 'c', answer: 'dog'};
                expect(validation.validateArgs(argv)).to.equal('invalid');
            });
        }),
        describe('"uom"', () => {
            it('should return invalid when uom is not in the accepted uom list ', () => {
                let argv = { temp: 1000, uom: 'z', target: 'c', answer: 'dog'};
                expect(validation.validateArgs(argv)).to.equal('invalid');
            });
        }),
        describe('"target"', () => {
            it('should return invalid when target is not in the accepted uom list ', () => {
                let argv = { temp: 1000, uom: 'c', target: 9, answer: 'dog'};
                expect(validation.validateArgs(argv)).to.equal('invalid');
            });
        });
    });
});