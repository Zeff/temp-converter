'use strict';

const input = require('./index');
const expect = require('chai').expect;

describe('User data', () => {
    describe('"input"', () => {
        it('should be an object', () => {
            expect(input).to.be.an('object');
        });
    });
});

describe('Input functions', () => {
    describe('"validateArgs"', () => {
        it('should be a function', () => {
            expect(input.validateArgs).to.be.a('function');
        }),
    describe('"tempConversion"', () => {
        it('should be a function', () => {
            expect(input.tempConversion).to.be.a('function');
        });
    }),
    describe('"compareAnswers"', () => {
        it('should be a function', () => {
            expect(input.compareAnswers).to.be.a('function');
        });
    });
    });
})