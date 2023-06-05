const { type } = require( '../general/type' );

const jsonize = function( str, strict = false ) {
    let strDefault = strict ? null : str;
    if( typeof str !== "string" ) { return strDefault; }

    let strJson;
    try { strJson = JSON.parse( str ); }
    catch( err ) { return strDefault; }

    let jsonType = type( strJson );
    return [ 'object', 'array' ].includes( jsonType ) ? strJson : strDefault;
};

module.exports = { jsonize };