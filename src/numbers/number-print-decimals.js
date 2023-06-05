const { isNumeric } = require( './is-numeric' );
const { numberFixDecimals } = require( './number-fix-decimals' );

const numberPrintDecimals = function( num, decimalLength = 2, allowAllRightZeros = true, minRightZeros = 2 ) {
    num = numberFixDecimals( num, decimalLength, allowAllRightZeros, minRightZeros );
    return ! isNumeric( num ) ? num : num.replace( /\./g, ',' );
};

// numberFixDecimals( '2,1478' ); -> '2,15'
// numberFixDecimals( '2,1478', 6 ); -> '2,147800'
// numberFixDecimals( '2.1478', 6, false ); -> '2,1478'
// numberFixDecimals( '2.1478', 6, false, 5 ); -> '2,14780'

module.exports = { numberPrintDecimals };