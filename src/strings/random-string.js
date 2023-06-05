const { isNumeric } = require( '../numbers/is-numeric' );

const randomString = function( len = 8 ) {
    ( ! isNumeric( len ) ) && ( len = 8 );
    if( +len <= 0 ) { return ''; }

    let str = Math.random().toString( 36 ).slice( 2, 12 );
    str.length < 10 && ( str = `${str}17o`.slice( 0, 10 ) );
    if( +len <= 10 ) { return str.slice( -len ); }

    return str + randomString( len - 10 );
};

module.exports = { randomString };