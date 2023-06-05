const { isArray } = require( '../general/is-array' );
const { isNumber } = require( '../general/is-number' );
const { isString } = require( '../general/is-string' );
const { isNully } = require( '../general/is-nully' );

const arrayToObjectByKey = function( arr, key, strict = false ) {
    if( ! isArray( arr ) ) { return {}; }
    isNumber( key ) && ( key += '' );
    if( ! isString( key ) ) { return {}; }

    return strict ? arr.reduce( ( a, b ) => { return ! isNully( b ) && b[ key ] !== undefined ? ({ ...a, [ b[ key ] ]: b }) : { ...a } }, {} )
                  : arr.reduce( ( a, b ) => { return ! isNully( b ) ? ({ ...a, [ b[ key ] ]: b }) : { ...a } }, {} )
};

// arrayToObjectByKey( [ { id: 'alpha', name: 'Alpha' }, { id: 'bravo', name: 'Bravo' } ], 'id' );
// -> { 'alpha': { id: 'alpha', name: 'Alpha' }, 'bravo': { id: 'bravo', name: 'Bravo' }

module.exports = { arrayToObjectByKey };