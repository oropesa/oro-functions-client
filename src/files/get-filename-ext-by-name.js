const { isString } = require( '../general/is-string' );
const { getFilenameByPath } = require( './get-filename-by-path' );

const getFilenameExtByName = function( filenameOrPath ) {
    if( ! isString( filenameOrPath ) ) { return ''; }

    let filename = getFilenameByPath( filenameOrPath );
    return filename.indexOf( '.' ) === -1 ? '' : filename.split( '.' ).pop();
};

module.exports = { getFilenameExtByName };