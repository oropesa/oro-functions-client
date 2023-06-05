const { type } = require( '../general/type' );
const { isArray } = require( '../general/is-array' );

const getObjectMissedKeys = function( obj, keys ) {
    if( ! [ 'object', 'array' ].includes( type( obj ) ) ) { return []; }
    if( ! isArray( keys ) || ! keys.length ) { return []; }

    const objKeys = Object.keys( obj );
    return keys.filter( k => ! objKeys.includes( k + '' ) );
};

module.exports = { getObjectMissedKeys };