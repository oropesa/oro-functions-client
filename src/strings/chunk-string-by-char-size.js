const { isNully } = require( '../general/is-nully' );
const { isNumeric } = require( '../numbers/is-numeric' );

const chunkStringByCharSize = function( str, char, size, orientation = 'left' ) {
    if( ! str ) { return '' }
    if( ! isNumeric( size ) || +size < 0 ) { return str; }

    isNully( char ) && ( char = '' );
    char += '';
    str += '';

    const regex = new RegExp( `(.{${size}})`, 'g' );

    if( orientation === 'right' ) {
        str = str.split( '' ).reverse().join( '' )
                 .replace( regex, `$1${char.split( '' ).reverse().join( '' )}` )
                 .split( '' ).reverse().join( '' );
        str.slice( 0, char.length ) === char && ( str = str.slice( char.length ) );
        return str;
    }

    str = str.replace( regex,`$1${char}`)
    str.slice( -(char.length) ) === char && ( str = str.slice( 0, str.length - char.length ) );
    return str;
};

// chunkStringByCharSize( 'chacho', '|', 3 ) )
// -> 'cha|cho'

module.exports = { chunkStringByCharSize };