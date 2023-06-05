const { isObject } = require( '../general/is-object' );
const { escAttr } = require( '../strings/esc-attr' );

const objToStringAttrData = function( obj ) {
    if( ! isObject( obj ) ) { return ''; }

    let str = '';
    Object.keys( obj ).forEach( key => {
        str += ` data-${key}="${escAttr( obj[ key ] )}"`;
    } );
    return str.length ? `${str} ` : str;
};

// objToStringAttrData( { id: 20, name: 'oro' } );
// -> ' data-id="20" data-name="oro" '

module.exports = { objToStringAttrData };