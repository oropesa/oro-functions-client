const { isString } = require( '../general/is-string' );

const sanitizePath = function( path ) {
    if( ! isString( path ) ) { return ''; }

    let sanitizedPath = ( path ).replace( /[\\/]+/g, '/' );
    if( path.indexOf( '\\\\' ) === 0 ) { sanitizedPath = `\\\\${sanitizedPath.slice( 1 )}` }

    return sanitizedPath;
};

module.exports = { sanitizePath };