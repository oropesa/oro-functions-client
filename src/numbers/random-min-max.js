const { isNumeric } = require( './is-numeric' );

const randomMinMax = function( min = 0, max = 100 ) {
    min = isNumeric( min ) ? +min : 0;
    max = isNumeric( max ) ? +max : 100;
    min > max && ( [ min, max ] = [ max, min ] );
    return Math.floor( Math.random() * (max - min + 1) + min );
};

module.exports = { randomMinMax };