const { sanitizePath } = require( './sanitize-path' );
const { isNumeric } = require( '../numbers/is-numeric' );

const getFolderByPath = function( path, deep = 1 ) {
    let filename = sanitizePath( path );
    if( filename.slice( -1 ) === '/' ) { filename = filename.slice( 0, filename.length - 1 ) }

    deep = ! isNumeric( deep ) || +deep < 1 ? 1 : +deep;
    for( let i = 0; i < deep; i++ ) {
        const lastBar = filename.lastIndexOf( '/' );
        if( lastBar === -1) { return ''; }

        filename = filename.slice( 0, lastBar );
    }

    return filename;
};

module.exports = { getFolderByPath };