const cloneDeep = require('lodash.clonedeep');
const { type } = require( '../general/type' );

const cloneObject = function( obj ) {
    if( ! [ 'object', 'array' ].includes( type( obj ) ) ) { return {}; }

    return cloneDeep( obj || {} );
};

// cloneObject( { a: '1', b: '2', c: '3' } );
// -> { a: '1', b: '2', c: '3' }

module.exports = { cloneObject };