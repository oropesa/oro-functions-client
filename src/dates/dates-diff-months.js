const { isDateObj } = require( './is-date-obj' );
const { isDate } = require( '../general/is-date' );

const datesDiffMonths = function( date1, date2 ) {
    if( ! isDate( date1 ) && ! isDateObj( date1 ) ) { return 0; }
    if( ! isDate( date2 ) && ! isDateObj( date2 ) ) { return 0; }

    const year1 = isDateObj( date1 ) ? +date1.year : date1.getFullYear();
    const month1 = isDateObj( date1 ) ? +date1.month : date1.getMonth();
    const year2 = isDateObj( date2 ) ? +date2.year : date2.getFullYear();
    const month2 = isDateObj( date2 ) ? +date2.month : date2.getMonth();

    return Math.abs( (year2 - year1) * 12 + month2 - month1 );
};

module.exports = { datesDiffMonths };