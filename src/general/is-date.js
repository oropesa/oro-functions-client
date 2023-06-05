const { type } = require( './type' );

const isDate = function( value ) {
    return type( value ) === 'date';
};

module.exports = { isDate };