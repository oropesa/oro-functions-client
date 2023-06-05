const { isNumeric } = require( './is-numeric' );

const isEven = function( num ) {
    return ! isNumeric( num ) ? undefined : ! (+num & 1);
};

module.exports = { isEven };