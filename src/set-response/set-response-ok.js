const { isObject } = require( '../general/is-object' );
const { objIsEmpty } = require( '../objects/obj-is-empty' );
const { cloneObject } = require( '../objects/clone-object' );

const setResponseOK = function( msgOrData, data = {} ) {
    let response = { status: true };

    let cloneData = cloneObject( data );

    isObject( msgOrData )
        ? ! objIsEmpty( msgOrData ) && ( response = Object.assign( response, cloneObject( msgOrData ) ) )
        : msgOrData && ( response.msg = msgOrData );

    if( ! objIsEmpty( cloneData ) ) {
        if(cloneData.msg) {
            response.msg = `${!! response.msg ? response.msg + ' ' : ''}${cloneData.msg}`;
            delete cloneData.msg
        }

        response = Object.assign( {}, response, cloneData, response );
    }

    response.status !== true && ( response.status = true );

    return response;
};


module.exports = { setResponseOK };