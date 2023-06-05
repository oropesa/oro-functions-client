const { isArray } = require( '../general/is-array' );

const arrayGetUnique = function( arr ) {
    if( ! isArray( arr ) ) { return []; }

    const primitiveSet = new Set();
    const objectStringSet = new Set();
    const objectSet = new Set();
    for( const elem of arr ) {
        if( typeof elem !== 'object' ) {
            primitiveSet.add(elem);
            continue;
        }

        const previousSize = objectStringSet.size;
        objectStringSet.add(JSON.stringify( elem ));
        if( previousSize === objectStringSet.size ) { continue; }

        objectSet.add( elem );
    }

    return [...primitiveSet.values(), ...objectSet.values()];
};

// arrayGetUnique( [ 1, 1, 2, 1, 3 ] );
// -> [ 1, 2, 3 ]

module.exports = { arrayGetUnique };