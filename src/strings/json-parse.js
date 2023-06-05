const { jsonize } = require( './jsonize' );
const { arrayize } = require( './arrayize' );
const { type } = require( '../general/type' );
const { isNumeric } = require( '../numbers/is-numeric' );

const jsonParse = function( str, strict = false ) {
    let strJson = jsonize( str, strict );
    if( type( strJson ) !== 'object' ) { return strJson; }

    let isJsonArray = ! strict && !! Object.keys( strJson ).filter( el => isNumeric( el ) && +el < 5 ).length;
    return isJsonArray ? arrayize( strJson ) : strJson;
};

module.exports = { jsonParse };