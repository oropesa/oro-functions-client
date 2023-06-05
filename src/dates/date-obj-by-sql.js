const { isString } = require( '../general/is-string' );
const { isObject } = require( '../general/is-object' );
const { dateObjByDate } = require( './date-obj-by-date' );
const { REGEXP_DATETIME_SQL } = require( 'oro-regexp' );

const dateObjBySql = function( sqldate, opts = {} ) {
    if( ! isString( sqldate ) ) { return null; }
    if( ! REGEXP_DATETIME_SQL.test( sqldate ) ) { return null; }

    isString( opts ) && ( opts = { sep: opts } );
    ! isObject( opts ) && ( opts = { sep: '/' } );
    ! isString( opts.sep ) && ( opts.sep = '/' );
    return dateObjByDate( (new Date( sqldate )), opts );
};

module.exports = { dateObjBySql };