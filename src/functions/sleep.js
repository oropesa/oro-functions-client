const { isNumeric } = require( '../numbers/is-numeric' );

const sleep = function( ms ) {
    if( ! isNumeric( ms ) ) { ms = 0; }
    ms = Math.floor( ms );

    return new Promise( resolve => setTimeout( resolve, ms ) );
};

module.exports = { sleep };