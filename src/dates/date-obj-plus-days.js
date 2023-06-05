const { isDateObj } = require( './is-date-obj' );
const { isDate } = require( '../general/is-date' );
const { isNumeric } = require( '../numbers/is-numeric' );
const { dateObjByDate } = require( './date-obj-by-date' );

const dateObjPlusDays = function( date, days ) {
    if( ! isDate( date ) && ! isDateObj( date ) ) { return null; }

    days = ! isNumeric( days ) ? 0 : +days;

    let jsdate = new Date( isDateObj( date ) ? date.jsdate : date );
    jsdate.setDate( jsdate.getDate() + days );

    return dateObjByDate( jsdate, isDateObj( date ) ? date : { sep: '/' } );
};

module.exports = { dateObjPlusDays };