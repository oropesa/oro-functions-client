const { isDateObj } = require( './is-date-obj' );
const { isDate } = require( '../general/is-date' );
const { datesCompare } = require( './dates-compare' );

const datesDiffMonthsArray = function( date1, date2 ) {
    if( ! isDate( date1 ) && ! isDateObj( date1 ) ) { return []; }
    if( ! isDate( date2 ) && ! isDateObj( date2 ) ) { return []; }

    let dateStart = new Date( isDateObj( date1 ) ? date1.jsdate : date1 );
    let dateEnd = new Date( isDateObj( date2 ) ? date2.jsdate : date2 );
    dateStart = new Date( dateStart.getFullYear(), dateStart.getMonth(), 1 );
    dateEnd = new Date( dateEnd.getFullYear(), dateEnd.getMonth(), 1 );

    dateEnd < dateStart && ( [ dateEnd, dateStart ] = [ dateStart, dateEnd ] );

    let monthsArr = [];
    while( true ) {
        let monthCompared = datesCompare( dateStart, dateEnd );
        if( monthCompared === -1 ) { break; }

        let year = dateStart.getFullYear() + '';
        let month = ('0' + (dateStart.getMonth() + 1)).slice( -2 );

        monthsArr.push( { year: year, month: month } );
        if( monthCompared === 0 ) { break; }

        dateStart.setDate( dateStart.getDate() + new Date( year, +month + 1, 0 ).getDate() )
    }

    return monthsArr;
};

module.exports = { datesDiffMonthsArray };