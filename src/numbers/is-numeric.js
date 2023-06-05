const { isNumber } = require( '../general/is-number' );

const isNumeric = function( num ) {
    if( isNumber( num ) ) { return num - num === 0; }
    if( typeof num === 'string' && num.trim() !== '' ) {
        return Number.isFinite ? Number.isFinite( +num ) : isFinite( +num );
    }
    return false;
};

const isNumberic = function( num ) { return isNumeric( num ); }

module.exports = { isNumeric, isNumberic };