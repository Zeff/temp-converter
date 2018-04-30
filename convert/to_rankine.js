'use strict';

function toRankine(args) {
    switch (args.uom.toLowerCase()) {
        case 'c':
            return (args.temp + 273.15) * 9 / 5;
            break;
        case 'f':
            return args.temp + 459.67;
            break; 
        case 'k':
            return args.temp * 9 / 5;    
    }
}

module.exports = {
    toRankine
}