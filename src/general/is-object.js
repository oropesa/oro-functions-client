const { type } = require( './type' );

const isObject = function( value ) {
    return type( value ) === 'object';
};

module.exports = { isObject };