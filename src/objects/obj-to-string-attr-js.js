const { isObject } = require( '../general/is-object' );
const { escAttr } = require( '../strings/esc-attr' );

const objToStringAttrJs = function( obj ) {
    if( ! isObject( obj ) ) { return ''; }

    let str = '';
    Object.keys( obj ).forEach( key => {
        !! str && ( str += ';' );
        str += ` ${key}:${escAttr( obj[ key ] )}`;
    } );
    return str.length ? `${str} ` : str;
};

// objToStringAttrJs( { id: 20, name: 'oro' } );
// -> ' id:20;name:oro '

module.exports = { objToStringAttrJs };