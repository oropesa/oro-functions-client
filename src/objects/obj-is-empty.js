const { type } = require( '../general/type' );

const objIsEmpty = function( obj ) {
    if( ! [ 'object', 'array' ].includes( type( obj ) ) ) { return true; }
    return Object.keys( obj || {} ).length === 0;
};

module.exports = { objIsEmpty };