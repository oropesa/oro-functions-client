const { type } = require( '../general/type' );

const isStringJson = function( str, allowArray = false ) {
    if( typeof str !== "string" ) { return false; }

    let strJson;
    try { strJson = JSON.parse( str ); }
    catch( e ) {
        return false;
    }

    if( allowArray && type( strJson ) === "array" ) { return true; }
    return type( strJson ) === "object";
};

module.exports = { isStringJson };