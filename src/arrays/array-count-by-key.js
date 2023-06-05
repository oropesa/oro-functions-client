const { isArray } = require( '../general/is-array' );
const { isNumber } = require( '../general/is-number' );
const { isString } = require( '../general/is-string' );

const arrayCountByKey = function( arr, key, strict = false ) {
    if( ! isArray( arr ) ) { return {}; }
    isNumber( key ) && ( key += '' );
    if( ! isString( key ) ) { return {}; }

    return strict ?
           arr.reduce( ( prev, curr ) => { curr && curr[ key ] && (prev[ curr[ key ] ] = ++prev[ curr[ key ] ] || 1); return prev }, {} ) :
           arr.reduce( ( prev, curr ) => { curr && (prev[ curr[ key ] ] = ++prev[ curr[ key ] ] || 1); return prev }, {} )
};

// arrayCountByKey( [ { id: 'alpha', category: 'male' }, { id: 'bravo', category: 'female' } ], 'category' );
// -> { 'male': 1, 'female': 1 }

module.exports = { arrayCountByKey };