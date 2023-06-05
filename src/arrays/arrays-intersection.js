const { isArray } = require( '../general/is-array' );
const { cloneArray } = require( './clone-array' );

const arraysIntersection = function() {
    let arrResult = [];

    for( const arr of arguments ) {
        if( ! isArray( arr ) || ! arr.length ) { continue; }
        if( ! arrResult.length ) { arrResult = arr; continue; }

        arrResult = arrResult.filter( elem => arr.includes( elem ) );
    }

    return cloneArray( arrResult );
};

// arraysIntersection( [ 1, 2, 3 ], [ 2, 3, 4 ] );
// -> [ 2, 3 ]

module.exports = { arraysIntersection };