const { objIsEmpty } = require( './obj-is-empty' );
const { cloneObject } = require( './clone-object' );
const { isObject } = require( '../general/is-object' );

const mergeObjectsDeep = function() {
    let objMerged = {};

    for( const obj of arguments ) {
        if( ! isObject( obj ) || objIsEmpty( obj ) ) { continue; }

        if( objIsEmpty( objMerged ) ) {
            objMerged = cloneObject( obj );
            continue;
        }

        let objClone = cloneObject( obj );
        for( const key of Object.keys( objClone ) ) {
            if( objMerged[ key ] === undefined ) { objMerged[ key ] = objClone[ key ]; continue; }
            if( ! isObject( objClone[ key ] ) || ! isObject( objMerged[ key ] ) ) {
                objMerged[ key ] = objClone[ key ];
                continue;
            }

            objMerged[ key ] = mergeObjectsDeep( objMerged[ key ], objClone[ key ] );
        }
    }

    return objMerged;
};

// mergeObjectsDeep( { a: { a1: '1', a2: '2' }, { a: { a1: '7', a3: '3' } );
// -> { a: { a1: '7', a2: '2', a3: '3' }

module.exports = { mergeObjectsDeep };