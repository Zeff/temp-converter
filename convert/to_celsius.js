'use strict';

function toCelsius(args) {
    switch (args.uom.toLowerCase()) {
        case 'f':
            return (5 / 9 * (args.temp - 32));
            break;
        case 'k':
            return (args.temp - 273.15);
            break; 
        case 'r':
            return ((args.temp - 491.67) / 1.8);    
    }
}

module.exports = {
    toCelsius
}