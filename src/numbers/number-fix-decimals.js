const { isNumeric } = require( './is-numeric' );
const { strPad } = require( '../strings/str-pad' );
const { isBoolean } = require( '../general/is-boolean' );

const numberFixDecimals = function( num, decimalLength = 2, allowAllRightZeros = true, minRightZeros = true ) {
    if( typeof num !== 'string' && typeof num !== 'number' ) { return num; }
    if( ! num ) { num = 0; }

    let tmp = num;
    num = (num + '').replace( /,/g, '.' );
    if( ! isNumeric( num ) ) { return tmp; }
    if( decimalLength === false || decimalLength === 'false' ) { return num; } // allow all decimals

    ( ! isNumeric( decimalLength ) || decimalLength < 0 ) && ( decimalLength = 0 );
    num = +(Math.round( num + `e+${decimalLength}` ) + `e-${decimalLength}`) + '';

    ( ( ! isBoolean( minRightZeros ) && ! isNumeric( minRightZeros ) ) || minRightZeros < 0 ) && ( minRightZeros = 0 );

    let parts = num.split( '.' );
    if( parts[ 1 ] === undefined ) { parts.push( '' ) }

    let decimals = strPad( parts[ 1 ], decimalLength, '0', 'right' );
    if( ! allowAllRightZeros ) {
        decimals = decimals.replace( /0+$/g, '' );
        decimals.length && decimals.length < minRightZeros && ( decimals = strPad( parts[ 1 ], minRightZeros, '0', 'right' ) );
    }

    minRightZeros === false && ! +decimals && ( decimals = '' );

    decimals.length && ( decimals = `.${decimals}` );
    return `${parts[ 0 ]}${decimals}`;
};

// numberFixDecimals( '2,1478' ); -> '2.15'
// numberFixDecimals( '2,1478', 6 ); -> '2.147800'
// numberFixDecimals( '2.1478', 6, false ); -> '2.1478'
// numberFixDecimals( '2.1478', 6, false, 5 ); -> '2.14780'

module.exports = { numberFixDecimals };