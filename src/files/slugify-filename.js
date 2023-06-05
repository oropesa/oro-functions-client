const { slugify } = require( '../strings/slugify' );
const { isString } = require( '../general/is-string' );
const { getFilenameByPath } = require( './get-filename-by-path' );
const { getFilenameExtByName } = require( './get-filename-ext-by-name' );
const { getFilenameWOutExtByName } = require( './get-filename-wout-ext-by-name' );

const slugifyFilename = function( filenameOrPath ) {
    if( ! isString( filenameOrPath ) ) { return ''; }

    let filename = getFilenameByPath( filenameOrPath );

    return filename.lastIndexOf( '.' ) === -1
           ? slugify( getFilenameWOutExtByName( filename ) )
           : `${slugify( getFilenameWOutExtByName( filename ) )}.${getFilenameExtByName( filename )}`;
};

module.exports = { slugifyFilename };