const { isNumber } = require( '../general/is-number' );
const { isString } = require( '../general/is-string' );

const slugify = function( str ) {
    if( isNumber( str ) ) { return str + ''; }
    if( isString( str ) ) { str = str + ''; }
    if( typeof str !== 'string' ) { return ''; }

    return str.match( /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g )
              .map( x => x.toLowerCase() )
              .join( '-' );
};

module.exports = { slugify };