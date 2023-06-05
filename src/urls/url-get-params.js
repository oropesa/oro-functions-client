const { urlObjByUrl } = require( './url-obj-by-url' );
const { isString } = require( '../general/is-string' );

const urlGetParams = function( urlOrQuery ) {
    if( ! isString( urlOrQuery ) ) { return {}; }

    let urlObj = urlObjByUrl( urlOrQuery );
    if( ! urlObj && urlOrQuery.indexOf( '?' ) !== -1 ) { return {}; }

    const searchParams = urlObj ? urlObj.searchParams : new URLSearchParams( urlOrQuery );

    return Array.from( searchParams ).reduce( ( p, [ k, v ] ) =>
        Object.assign( {}, p, {
            [ k ]: p[ k ] ? (Array.isArray( p[ k ] ) ? p[ k ] : [ p[ k ] ]).concat( v ) : v
        } ), {}
    );
};

module.exports = { urlGetParams };