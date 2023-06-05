const { type } = require( '../general/type' );

const arrayize = function( strOrObject, strict = false ) {
    let mixedDefault = strict ? null : strOrObject;
    let mixedType = type( strOrObject );
    if( ! [ 'string', 'object', 'array' ].includes( mixedType ) ) { return mixedDefault; }

    let json = [ 'object', 'array' ].includes( mixedType ) ? strOrObject : null;
    if( mixedType === 'string' ) {
        try { json = JSON.parse( strOrObject ); }
        catch( err ) { return mixedDefault; }
    }

    if( ! [ 'object', 'array' ].includes( type( json ) ) ) { return mixedDefault; }

    let arr = [];

    for( const key of Object.keys( json ) ) {
        arr[ key ] = json[ key ];
    }

    return arr;
};

module.exports = { arrayize };