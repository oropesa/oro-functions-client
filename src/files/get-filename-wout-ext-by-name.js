const { isString } = require( '../general/is-string' );
const { getFilenameByPath } = require( './get-filename-by-path' );

const getFilenameWOutExtByName = function( filenameOrPath ) {
    if( ! isString( filenameOrPath ) ) { return ''; }

    let filename = getFilenameByPath( filenameOrPath );
    return filename.indexOf( '.' ) === -1 ? filename : filename.split( '.' ).slice( 0, -1 ).join( '.' );
};

module.exports = { getFilenameWOutExtByName };