const { isObject } = require( '../general/is-object' );
const { objIsEmpty } = require( '../objects/obj-is-empty' );
const { cloneObject } = require( '../objects/clone-object' );

const setResponseKO = function( msgOrError, error = {}, tryAgain = false, asError = false ) {
    let response = { status: false, error: {} };

    let err = cloneObject( error );

    err.tryAgain !== undefined && ( tryAgain = err.tryAgain );
    delete err.tryAgain;

    err.asError !== undefined && ( asError = err.asError );
    delete err.asError;

    tryAgain && ( response.tryAgain = tryAgain );

    isObject( msgOrError ) ?
    ! objIsEmpty( msgOrError ) && ( response.error = Object.assign( response.error, msgOrError ) ) :
    msgOrError && ( response.error.msg = msgOrError );

    if( ! objIsEmpty( err ) ) {
        err.msg && ( response.error.msg = `${!! response.error.msg ? response.error.msg + ' ' : ''}${err.msg}` ) && ( delete err.msg );
        response.error = Object.assign( {}, response.error, err, response.error );
    }

    objIsEmpty( response.error ) && ( delete response.error );

    if( asError ) {
        try { throw new Error(); }
        catch( err ) {
            let cloneResponse = cloneObject( response );
            response = err;
            response.name = ( cloneResponse.error && cloneResponse.error.errorName ) || 'responseError';
            response.message = cloneResponse.error.msg;
            response.responseError = cloneResponse;
            response.stack = response.stack.replace( response.message, JSON.stringify( cloneResponse ) );
        }
    }

    return response;
};

module.exports = { setResponseKO };