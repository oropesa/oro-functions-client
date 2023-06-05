const { isArray } = require( '../general/is-array' );
const { cloneObject } = require( '../objects/clone-object' );

const cloneArray = function( arr ) {
    if( ! isArray( arr ) ) { return []; }

    return cloneObject( arr );
};

module.exports = { cloneArray };