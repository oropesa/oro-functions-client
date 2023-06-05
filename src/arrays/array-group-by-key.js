const { isArray } = require( '../general/is-array' );
const { isNumber } = require( '../general/is-number' );
const { isString } = require( '../general/is-string' );

const arrayGroupByKey = function( arr, key, strict = false ) {
    if( ! isArray( arr ) ) { return {}; }
    isNumber( key ) && ( key += '' );
    if( ! isString( key ) ) { return {}; }

    return strict ?
           arr.reduce( ( acc, item ) => { item && item[ key ] && (acc[ item[ key ] ] = [ ...(acc[ item[ key ] ] || []), item ]); return acc }, {} ) :
           arr.reduce( ( acc, item ) => { item && (acc[ item[ key ] ] = [ ...(acc[ item[ key ] ] || []), item ]); return acc }, {} )
};

// arrayGroupByKey( [ { id: 'alpha', category: 'male' }, { id: 'bravo', category: 'female' } ], 'category' );
// -> { 'male': [ { id: 'alpha', category: 'male' } ], 'female': [ { id: 'bravo', category: 'female' } ] }

module.exports = { arrayGroupByKey };