'use strict';

function toFahrenheit(args) {
    switch (args.uom.toLowerCase()) {
        case 'c':
            return (9 / 5 * args.temp) + 32;
            break;
        case 'k':
            return 9 / 5 * (args.temp - 273.15) + 32;
            break; 
        case 'r':
            return args.temp - 459.67;    
    }
}

module.exports = {
    toFahrenheit
}