const { isArray } = require( '../general/is-array' );
const { arrayGetUnique } = require( './array-get-unique' );
const { cloneArray } = require( './clone-array' );
const { arraysIntersection } = require( './arrays-intersection' );

const arraysDifferenceAll = function() {
    let arrResult = [];
    let arrIntersect = [];

    for( const arr of arguments ) {
        if( ! isArray( arr ) || ! arr.length ) { continue; }
        if( ! arrResult.length ) { arrResult = arr; continue; }

        arrIntersect = arrayGetUnique( arrIntersect.concat( arraysIntersection( arrResult, arr ) ) );
        arrResult = arrResult.filter( elem => ! arr.includes( elem ) ).concat( arr.filter( elem => ! arrResult.includes( elem ) ) );
        arrResult = arrResult.filter( elem => ! arrIntersect.includes( elem ) );
    }

    return cloneArray( arrResult );
};

// arraysDifferenceAll( [ 1, 2, 3 ], [ 2, 3, 4 ] ); -> [ 1, 4 ]

module.exports = { arraysDifferenceAll };