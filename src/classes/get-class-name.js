const { isClass } = require( '../general/is-class' );

const getClassName = function( classy ) {
    if( ! isClass( classy ) ) { return ''; }
    return classy.name;
};

module.exports = { getClassName };