const { isNumeric } = require( './is-numeric' );

const isOdd = function( num ) {
    return ! isNumeric( num ) ? undefined : !! (+num & 1);
};

module.exports = { isOdd };