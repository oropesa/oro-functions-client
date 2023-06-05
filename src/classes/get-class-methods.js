const { isClass } = require( '../general/is-class' );

const getClassMethods = function( classy ) {
    if( ! isClass( classy ) ) { return []; }
    return Object.getOwnPropertyNames( classy.prototype ).filter( prop => prop !== 'constructor' );
};

module.exports = { getClassMethods };