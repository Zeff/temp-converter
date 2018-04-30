'use strict';

const yargs = require('yargs');

const validateArgs = require('./validate').validateArgs;
const tempConversion = require('../convert').tempConversion;

const argv = yargs.argv;
const validated_args = validateArgs(argv);

function compareAnswers(answer1, answer2) {
    return (Math.round(answer1) == Math.round(answer2) ? 'correct' : 'incorrect');
}

if (validated_args === true) {
    let authoritativeAnswer = (tempConversion(argv));
    console.log(compareAnswers(authoritativeAnswer, 99.5));
} else {
    console.log('invalid');
}

module.exports = {
    validateArgs,
    tempConversion,
    compareAnswers
}