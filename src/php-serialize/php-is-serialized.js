const { isString } = require( '../general/is-string' );

const phpIsSerialized = function( str, strict = true ) {
    // if it isn't a string, it isn't serialized.
    if( ! isString( str ) ) { return false; }

    str = str.trim();
    if( str === 'N;' ) { return true ; }
    if( str.length < 4 ) { return false; }
    if( str[ 1 ] !== ':' ) { return false; }
    if( strict ) {
        let lastc = str.slice( -1 );
        if( lastc !== ';' && lastc !== '}' ) { return false; }
    }
    else {
        let semicolon = str.indexOf( ';' );
        let brace = str.indexOf( '}' );
        // Either ; or } must exist.
        if( semicolon === -1 && brace === -1 ) { return false; }
        // But neither must be in the first X characters.
        if( semicolon !== -1 && semicolon < 3 ) { return false; }
        if( brace !== -1 && brace < 4 ) { return false; }
    }

    let token = str[ 0 ];
    switch( token ) {
        case 's':
            if( strict ) {
                if( str.slice( -2, -1 ) !== '"' ) { return false; }
            }
            else if( str.indexOf( '"' ) === -1 ) { return false; }
        // or else fall through
        case 'a':
        case 'O':
            return !! str.match( new RegExp( `^${token}:[0-9]+:`, 's' ) );
        case 'b':
        case 'i':
        case 'd':
            let end = strict ? '$' : '';
            return !! str.match( new RegExp( `^${token}:[0-9.E+-]+;${end}` ) );
    }
    return false;
};

module.exports = { phpIsSerialized };