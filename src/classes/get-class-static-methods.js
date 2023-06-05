const { isClass } = require( '../general/is-class' );

const getClassStaticMethods = function( classy ) {
    if( ! isClass( classy ) ) { return []; }
    return Object.getOwnPropertyNames( classy ).filter( prop => typeof classy[ prop ] === 'function' );
};

module.exports = { getClassStaticMethods };