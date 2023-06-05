const { isString } = require( '../general/is-string' );
const { sanitizePath } = require( './sanitize-path' );

const getFilenameByPath = function( path ) {
    if( ! isString( path ) ) { return ''; }

    let filename = sanitizePath( path );
    return filename.substring( filename.lastIndexOf( '/' ) + 1 );
};

module.exports = { getFilenameByPath };