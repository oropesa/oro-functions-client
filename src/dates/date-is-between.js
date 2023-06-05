const { isDateObj } = require( './is-date-obj' );
const { isDate } = require( '../general/is-date' );

const dateIsBetween = function( date, dateMin, dateMax ) {
    if( ! isDate( date ) && ! isDateObj( date ) ) { return false; }
    if( ! isDate( dateMin ) && ! isDateObj( dateMin ) ) { return false; }
    if( ! isDate( dateMax ) && ! isDateObj( dateMax ) ) { return false; }

    const timestampDate = isDateObj( date ) ? date.timestamp : date.getTime();
    const timestampMin = isDateObj( dateMin ) ? dateMin.timestamp : dateMin.getTime();
    const timestampMax = isDateObj( dateMax ) ? dateMax.timestamp : dateMax.getTime();

    return timestampDate >= timestampMin && timestampDate <= timestampMax
};

module.exports = { dateIsBetween };