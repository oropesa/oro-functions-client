const { isArray } = require( '../general/is-array' );
const { isNumber } = require( '../general/is-number' );
const { isString } = require( '../general/is-string' );
const { isNully } = require( '../general/is-nully' );

const arraySortByKey = function( arr, key, sortArray ) {
    if( ! isArray( arr ) ) { return []; }
    isNumber( key ) && ( key += '' );
    if( ! isString( key ) ) { return []; }

    let values;
    if( isArray( sortArray ) ) {
        values = arr.concat().sort( ( a, b ) => {
            if( b[ key ] === undefined ) { return -1; }
            if( a[ key ] === undefined ) { return  1; }

            let indexA = sortArray.indexOf( a[ key ] );
            if( indexA === -1 ) { return 1; }

            let indexB = sortArray.indexOf( b[ key ] );
            if( indexB === -1 ) { return -1; }

            return indexA > indexB ? 1 : indexA < indexB ? -1 : 0;
        } );
    }
    else {
        values = arr.concat().sort( ( a, b ) =>
            ( b[ key ] === undefined ) ? -1 : ( a[ key ] === undefined ) ? 1 :
                                              ( a[ key ] > b[ key ] ) ? 1 : ( (a[ key ] < b[ key ]) ? -1 : 0 )
        );
    }

    return values.filter( el => ! isNully( el ) );
};

// arraySortByKey( [ { id: 'alpha', category: 'male' }, { id: 'bravo', category: 'female' } ], 'category' );
// -> [ { id: 'bravo', category: 'female' }, { id: 'alpha', category: 'male' } ]

module.exports = { arraySortByKey };