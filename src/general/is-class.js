const { type } = require( './type' );

const isClass = function( value ) {
    return type( value ) === 'class';
};

module.exports = { isClass };