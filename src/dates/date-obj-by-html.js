const { isString } = require( '../general/is-string' );
const { isObject } = require( '../general/is-object' );
const { dateObjByDate } = require( './date-obj-by-date' );
const { REGEXP_DATETIME_FN } = require( 'oro-regexp' );

const dateObjByHtml = function( html, opts = {} ) {
    if( ! isString( html ) ) { return null; }

    isString( opts ) && ( opts = { sep: opts } );
    ! isObject( opts ) && ( opts = { sep: '/' } );
    ! isString( opts.sep ) && ( opts.sep = '/' );

    if( ! REGEXP_DATETIME_FN( opts.sep ).test( html ) ) { return null; }

    const arr = html.trim().split( opts.sep );
    if( arr.length !== 3 ) { return null; }

    const yearhours = arr[ 2 ].split( ' ' );
    let sqldate = `${yearhours[ 0 ]}-${arr[ 1 ]}-${arr[ 0 ]}`;
    if( yearhours.length > 1 ) {
        sqldate += ` ${yearhours[ 1 ]}`;
    }

    return dateObjByDate( (new Date( sqldate )), opts );
};

module.exports = { dateObjByHtml };