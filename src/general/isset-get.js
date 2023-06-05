const { isNully } = require( './is-nully' );

const issetGet = function( obj, key, def = null, allowFalsy = true ) {
    if( isNully( obj ) || obj[ key ] === undefined ) {
        return def;
    }

    return ! allowFalsy && ! obj[ key ] ? def : obj[ key ];
};

// issetGet( myObject, 'category', 'artist' );

module.exports = { issetGet };