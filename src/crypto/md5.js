const { md5: MD5 } = require( 'oro-php-locutus' );
const { isNully } = require( '../general/is-nully' );

const md5 = function( str ) {
    return isNully( str ) ? '' : MD5( str );
};

module.exports = { md5 };