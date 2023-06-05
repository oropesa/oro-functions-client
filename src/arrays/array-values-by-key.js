const { isArray } = require( '../general/is-array' );
const { isNumber } = require( '../general/is-number' );
const { isString } = require( '../general/is-string' );
const { isNully } = require( '../general/is-nully' );

const arrayValuesByKey = function( arr, key, strict = false ) {
    if( ! isArray( arr ) ) { return []; }
    isNumber( key ) && ( key += '' );
    if( ! isString( key ) ) { return []; }

    let values = arr.map( obj => ! isNully( obj ) ? obj[ key ] : undefined );
    return ! strict ? values : values.filter( el => el !== undefined );
};

// arrayValuesByKey( [ { id: 'alpha', name: 'Alpha' }, { id: 'bravo', name: 'Bravo' } ], 'id' );
// -> [ 'alpha', 'bravo' ]

module.exports = { arrayValuesByKey };