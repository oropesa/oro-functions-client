const { isObject } = require( '../general/is-object' );
const { isArray } = require( '../general/is-array' );

const jsonStringify = function( json, beautify = false ) {
    if( ! isObject( json ) && ! isArray( json ) ) { return ''; }

    return beautify
           ? JSON.stringify( Object.assign( {}, json ), null, 2 )
           : JSON.stringify( Object.assign( {}, json ) );
};

module.exports = { jsonStringify };