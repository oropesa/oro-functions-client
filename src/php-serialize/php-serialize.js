const { serialize } = require( 'oro-php-locutus' );
const { isArray } = require( '../general/is-array' );
const { isObject } = require( '../general/is-object' );
const { jsonStringify } = require( '../strings/json-stringify' );

const phpSerialize = function( mixedValue, strict = false ) {
    if( isArray( mixedValue ) || isObject( mixedValue ) ) {
        if( ! strict ) { return jsonStringify( mixedValue, false ) }

        return serialize( mixedValue );
    }

    return mixedValue;
};

module.exports = { phpSerialize };