'use strict';

function toKelvin(args) {
    switch (args.uom.toLowerCase()) {
        case 'c':
            return args.temp + 273.15;
            break;
        case 'f':
            return (args.temp + 459.67) * 5 / 9;
            break; 
        case 'r':
            return args.temp * 5 / 9;    
    }
}

module.exports = {
    toKelvin
}