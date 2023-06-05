const { isDate } = require( '../general/is-date' );

const isDateObj = function( date ) {
    return !! date && isDate( date.jsdate );
};

module.exports = { isDateObj, dateIsObj: isDateObj };