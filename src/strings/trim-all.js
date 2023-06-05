const { isNumber } = require( '../general/is-number' );
const { isString } = require( '../general/is-string' );

const trimAll = function( str ) {
    if( isNumber( str ) ) { return str + ''; }
    if( isString( str ) ) { str = str + ''; }
    if( typeof str !== 'string' ) { return ''; }

    return str.trim().replace( /  +/g, ' ' );
};

module.exports = { trimAll };