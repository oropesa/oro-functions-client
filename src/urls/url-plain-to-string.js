const { isString } = require( '../general/is-string' );

const urlPlainToString = function( str ) {
    if( ! isString( str ) ) { return ''; }

    return str.replace( /%3d/g, '=' ).replace( /%20/g, ' ' );
};

module.exports = { urlPlainToString };