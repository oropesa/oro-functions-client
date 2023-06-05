const { type } = require( '../general/type' );
const { cloneObject } = require( './clone-object' );
const { isArray } = require( '../general/is-array' );
const { isNumeric } = require( '../numbers/is-numeric' );

const cloneObjectWithoutKeys = function( obj, keys ) {
    if( ! [ 'object', 'array' ].includes( type( obj ) ) ) { return {}; }
    if( ! isArray( keys ) || ! keys.length ) { return {}; }

    return cloneObject(
        Object.keys( obj || {} )
              .filter( k => { return isNumeric( k ) ? ! keys.includes( k ) && ! keys.includes( +k ) : ! keys.includes( k ) } )
              .reduce( ( res, k ) => Object.assign( res, { [ k ]: obj[ k ] } ), {} )
    );
};

// cloneObjectWithoutKeys( { a: '1', b: '2', c: '3' }, ['a', 'b'] );
// -> { c: '3' }

module.exports = { cloneObjectWithoutKeys };