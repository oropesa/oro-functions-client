const { type } = require( '../general/type' );
const { cloneObject } = require( './clone-object' );
const { isArray } = require( '../general/is-array' );
const { isNumeric } = require( '../numbers/is-numeric' );

const cloneObjectWithKeys = function( obj, keys ) {
    if( ! [ 'object', 'array' ].includes( type( obj ) ) ) { return {}; }
    if( ! isArray( keys ) || ! keys.length ) { return {}; }

    return cloneObject(
        Object.keys( obj || {} )
              .filter( k => { return isNumeric( k ) ? keys.includes( k ) || keys.includes( +k ) : keys.includes( k ) } )
              .reduce( ( res, k ) => Object.assign( res, { [ k ]: obj[ k ] } ), {} )
    );
};

// cloneObjectWithKeys( { a: '1', b: '2', c: '3' }, ['a', 'b'] );
// -> { a: '1', b: '2' }

module.exports = { cloneObjectWithKeys };