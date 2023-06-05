const { isString } = require( '../general/is-string' );

const urlIsValid = function( url ) {
    if( ! isString( url ) ) { return false; }

    try { new URL( url ); }
    catch( e ) { return false; }

    return true;
};

module.exports = { urlIsValid };