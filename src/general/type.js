const type = function( value, strict = false ) {
    let type = ( {} ).toString.call( value ).match( /\s([a-zA-Z]+)/ )[ 1 ].toLowerCase();

    if( type === 'function'
        && value.prototype
        && Object.getOwnPropertyNames( value.prototype ).some( m => m === 'constructor' )
        && /^\s*class/.test( value.toString() )
    ) {
        type = 'class';
    }

    if( strict && typeof value === 'object' ) { return value.constructor.name }

    return type;
}

// type( (new Date()) ); -> "date"

module.exports = { type };