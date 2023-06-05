const { isNully } = require( '../general/is-nully' );
const { isNumeric } = require( '../numbers/is-numeric' );

const strPad = function( str, length, pad = ' ', leftRight = 'left' ) {
    if( ! [ 'left', 'right' ].includes( leftRight ) ) { leftRight = 'left'; }

    ( isNully( str ) ) && ( str = '' );
    str += '';
    if( str.length >= length ) {
        return leftRight === 'left' ? str.slice( 0, length ) : str.slice( -length );
    }

    ( ! isNumeric( length ) || ! length ) && ( length = str.length );
    ( length < 0 ) && ( length = 0 );
    let padStr = new Array( length + 1 ).join( pad );
    padStr = padStr.slice( 0, length - str.length );

    return leftRight === 'left' ? padStr + str : str + padStr;
};

module.exports = { strPad };