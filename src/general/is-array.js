const { type } = require( './type' );

const isArray = function( value ) {
    return type( value ) === 'array';
};

module.exports = { isArray };