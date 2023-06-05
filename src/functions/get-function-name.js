const getFunctionName = function( fn ) {
    const findFirstOccurrence = ( string, searchElements, fromIndex = 0 ) => {
        let min = string.length;
        for( let i = 0; i < searchElements.length; i += 1 ) {
            const occ = string.indexOf( searchElements[ i ], fromIndex );
            if( occ !== -1 && occ < min ) { min = occ; }
        }
        return min === string.length ? -1 : min;
    }

    if( fn ) {
        if( fn.name ) { return fn.name; }
        const result = /^function\s+([\w\$]+)\s*\(/.exec( fn.toString() );
        return result ? result[ 1 ] : '';
    }

    const obj = {};
    Error.captureStackTrace( obj, getFunctionName );
    const { stack } = obj;
    const firstCharacter = stack.indexOf( 'at ', stack.indexOf( 'at ' ) + 1 ) + 3;
    const lastCharacter = findFirstOccurrence( stack, [ ' ', ':', '\n' ], firstCharacter );
    return stack.slice( firstCharacter, lastCharacter ).replace( 'Object.', '' );
};

module.exports = { getFunctionName };