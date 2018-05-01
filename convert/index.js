'use strict';

const toCelsius = require('./to_celsius').toCelsius;
const toFahrenheit = require('./to_fahrenheit').toFahrenheit;
const toKelvin = require('./to_kelvin').toKelvin;
const toRankine = require('./to_rankine').toRankine;

function tempConversion(args) {
    switch (args.target.toLowerCase()) {
        case 'c':
            return toCelsius(args);
        case 'f':
            return toFahrenheit(args);
        case 'k':
            return toKelvin(args);
        case 'r':
            return toRankine(args);
    }
}

module.exports = {
    tempConversion
};