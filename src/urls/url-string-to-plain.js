const { isString } = require( '../general/is-string' );

const urlStringToPlain = function( str ) {
    if( ! isString( str ) ) { return ''; }

    return str.replace( /=/g, '%3d' ).replace( / /g, '%20' );
};

module.exports = { urlStringToPlain };