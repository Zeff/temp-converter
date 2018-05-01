'use strict';

// base validation for all user parameters, should refactor to
// smaller functions if complexity increases
function validateArgs(args) {
    var uoms = ['f', 'c', 'k', 'r'];
    if (typeof(args.temp) === 'number'
        && typeof(args.uom) === 'string'
        && typeof(args.target) === 'string'
        && uoms.includes(args.uom.toLowerCase()) // Case insensitive for now
        && uoms.includes(args.target.toLowerCase())) // Address in yargs later
    {
        return true;
    } else {
        return 'invalid';
    }
}

module.exports = {
    validateArgs
} 