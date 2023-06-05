const { isNumber } = require( '../general/is-number' );
const { isString } = require( '../general/is-string' );

const capitalize = function( str ) {
    if( isNumber( str ) ) { return str + ''; }
    if( isString( str ) ) { str = str + ''; }
    if( typeof str !== 'string' ) { return ''; }

    return `${str.charAt( 0 ).toUpperCase()}${str.slice( 1 )}`;
};

module.exports = { capitalize };