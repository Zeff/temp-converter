'use strict';

const yargs = require('yargs');

const validateArgs = require('./validate').validateArgs;

const argv = yargs.argv;

module.exports = {
    validateArgs
}