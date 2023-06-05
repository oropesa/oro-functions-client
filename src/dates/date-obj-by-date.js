const { type } = require( '../general/type' );
const { isString } = require( '../general/is-string' );
const { isObject } = require( '../general/is-object' );

const dateObjByDate = function( date, opts = {} ) {
    if( type( date ) !== 'date' ) { return null; }

    let dateObj = {};
    dateObj.iso = date.toISOString();

    isString( opts ) && ( opts = { sep: opts } );
    ! isObject( opts ) && ( opts = { sep: '/' } );
    ! isString( opts.sep ) && ( opts.sep = '/' );

    dateObj.sep = opts.sep;

    const localData = new Date( date );
    localData.setHours( localData.getHours() + ( date.getTimezoneOffset() / -60 ) );
    dateObj.local = localData.toISOString();

    const dateArr = dateObj.local.split( /[^0-9]/ ).slice( 0, -1 );
    // dateArr = [ year, month, day, hour, minute, second, millisecond ]

    dateObj.year = dateArr[ 0 ];
    dateObj.month = dateArr[ 1 ];
    dateObj.day = dateArr[ 2 ];
    dateObj.hour = dateArr[ 3 ];
    dateObj.minute = dateArr[ 4 ];
    dateObj.second = dateArr[ 5 ];

    dateObj.time = `${dateObj.hour}:${dateObj.minute}`;
    dateObj.times = `${dateObj.hour}:${dateObj.minute}:${dateObj.second}`;

    dateObj.date = `${dateObj.day}${dateObj.sep}${dateObj.month}${dateObj.sep}${dateObj.year}`;
    dateObj.datetime = `${dateObj.date} ${dateObj.time}`;
    dateObj.datetimes = `${dateObj.date} ${dateObj.times}`;

    dateObj.sqldate = `${dateObj.year}-${dateObj.month}-${dateObj.day}`;
    dateObj.sqldatetime = `${dateObj.sqldate} ${dateObj.times}`;
    dateObj.sqldatetimeIso = dateObj.iso.replace( 'T', ' ' ).substring( 0, 19 );

    dateObj.fulldate = `${dateObj.date} ${dateObj.times}`;
    dateObj.fulldateStart = `${dateObj.date} 00:00:00`;
    dateObj.fulldateEnd = `${dateObj.date} 23:59:59`;

    dateObj.weekday = [ 7, 1, 2, 3, 4, 5, 6 ][ date.getDay() ];
    dateObj.monthdays = new Date( +dateObj.year, +dateObj.month, 0 ).getDate();
    dateObj.timestamp = date.getTime();

    dateObj.jsdate = new Date( date );
    return dateObj;
};

module.exports = { dateObjByDate };