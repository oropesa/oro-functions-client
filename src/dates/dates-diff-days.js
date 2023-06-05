const { isDateObj } = require( './is-date-obj' );
const { isDate } = require( '../general/is-date' );

const datesDiffDays = function( date1, date2 ) {
    if( ! isDate( date1 ) && ! isDateObj( date1 ) ) { return 0; }
    if( ! isDate( date2 ) && ! isDateObj( date2 ) ) { return 0; }

    let jsdate1 = isDateObj( date1 ) ? date1.jsdate : date1;
    let jsdate2 = isDateObj( date2 ) ? date2.jsdate : date2;

    jsdate2 < jsdate1 && ( [ jsdate1, jsdate2 ] = [ jsdate2, jsdate1 ] );

    return Math.ceil( ( jsdate2 - jsdate1 ) / (1000 * 60 * 60 * 24) );
};

module.exports = { datesDiffDays };