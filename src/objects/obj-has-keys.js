const { type } = require( '../general/type' );
const { isArray } = require( '../general/is-array' );

const objHasKeys = function( obj, keys ) {
    if( ! [ 'object', 'array' ].includes( type( obj ) ) ) { return false; }
    if( ! isArray( keys ) || ! keys.length ) { return false; }

    const objKeys = Object.keys( obj );
    return keys.every( k => objKeys.includes( k + '' ) );
};

module.exports = { objHasKeys };