const { isNumber } = require( '../general/is-number' );
const { isString } = require( '../general/is-string' );
const { isNumeric } = require( '../numbers/is-numeric' );

const textTruncate = function( str, max = 120, suffix = '...' ) {
    if( isNumber( str ) || isString( str ) ) { str += ''; }
    if( typeof str !== 'string' ) { return ''; }
    if( max === true ) { return str; }

    ( ! isNumeric( max ) ) && ( max = 120 );
    suffix = suffix === null ? '...' : suffix + '';

    if( suffix.length >= max ) { return suffix.slice( -max ); }
    if( str.length <= max ) { return str; }

    let min = str.slice( 0, max - suffix.length ).lastIndexOf( ' ' );
    min === -1 && ( min = max - suffix.length );

    return `${str.slice( 0, min )}${suffix}`;
};

module.exports = { textTruncate };