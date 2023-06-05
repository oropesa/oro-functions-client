const { isNumber } = require( '../general/is-number' );

const splitStringNumber = function( str, sep = '|' ) {
    if( isNumber( str ) ) { str += ''; }
    if( typeof str !== 'string' ) { return []; }

    return str.replace( /(\d+)/g, `${sep}$1${sep}` ).split( sep ).filter( l => !! l );
};

// splitStringNumber( 'chacho123' ); -> [ 'chacho', '123' ]
// splitStringNumber( '123.456' ); -> [ '123', '.', '456' ]
// splitStringNumber( '123.456', '.' ); -> [ '123', '456' ]
// splitStringNumber( 'chacho loco', ' ' ); -> [ 'chacho', 'loco' ]

module.exports = { splitStringNumber };