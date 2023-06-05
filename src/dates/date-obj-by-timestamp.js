const { isNumber } = require( '../general/is-number' );
const { isString } = require( '../general/is-string' );
const { isObject } = require( '../general/is-object' );
const { dateObjByDate } = require( './date-obj-by-date' );

const dateObjByTimestamp = function( timestamp, opts = {} ) {
    if( ! isNumber( timestamp ) ) { return null; }

    isString( opts ) && ( opts = { sep: opts } );
    ! isObject( opts ) && ( opts = { sep: '/' } );
    ! isString( opts.sep ) && ( opts.sep = '/' );
    return dateObjByDate( (new Date( timestamp )), opts );
};

module.exports = { dateObjByTimestamp };