const { isString } = require( '../general/is-string' );

const urlObjByUrl = function( url ) {
    if( ! isString( url ) ) { return null; }

    try { return new URL( url ); }
    catch( e ) { return null; }
};

module.exports = { urlObjByUrl };