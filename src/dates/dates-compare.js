const { isDateObj } = require( './is-date-obj' );
const { isDate } = require( '../general/is-date' );

const datesCompare = function( date1, date2 ) {
    if( ! isDate( date1 ) && ! isDateObj( date1 ) ) {
        return ! isDate( date2 ) && ! isDateObj( date2 ) ? 0 : 1;
    }

    if( ! isDate( date2 ) && ! isDateObj( date2 ) ) { return -1; }

    const timestamp1 = isDateObj( date1 ) ? date1.timestamp : date1.getTime();
    const timestamp2 = isDateObj( date2 ) ? date2.timestamp : date2.getTime();

    if( timestamp1 > timestamp2 ) {
        return -1;
    }
    else if( timestamp1 < timestamp2 ) {
        return 1;
    }
    return 0;
};

module.exports = { datesCompare };