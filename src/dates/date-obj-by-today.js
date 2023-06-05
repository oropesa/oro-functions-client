const { isString } = require( '../general/is-string' );
const { isObject } = require( '../general/is-object' );
const { dateObjByDate } = require( './date-obj-by-date' );

const dateObjByToday = function( opts = {} ) {
    isString( opts ) && ( opts = { sep: opts } );
    ! isObject( opts ) && ( opts = { sep: '/' } );
    ! isString( opts.sep ) && ( opts.sep = '/' );
    return dateObjByDate( (new Date()), opts );
};

module.exports = { dateObjByToday };