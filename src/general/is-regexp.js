const { type } = require( './type' );

const isRegexp = function( value ) {
    return type( value ) === 'regexp';
};

module.exports = { isRegexp };