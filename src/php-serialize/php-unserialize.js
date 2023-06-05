const { unserialize } = require( 'oro-php-locutus' );
const { jsonParse } = require( '../strings/json-parse' );
const { phpIsSerialized } = require( './php-is-serialized' );
const { isStringJson } = require( '../strings/is-string-json' );

const phpUnserialize = function( str, strict = false ) {
    if( ! strict && isStringJson( str, true ) ) { return jsonParse( str ); }

    // don't attempt to unserialize data that wasn't serialized going in
    if( ! phpIsSerialized( str ) ) { return str; }

    return unserialize( str );
};

module.exports = { phpUnserialize };