const { isNumber } = require( '../general/is-number' );

const substrCount = function( str, substr ) {
    if( isNumber( str ) ) { str += ''; }
    if( isNumber( substr ) ) { substr += ''; }
    if( typeof str !== 'string' || typeof substr !== 'string' || ! str || ! substr ) { return 0; }

    let regex = new RegExp( substr, 'g' );
    return (str.match( regex ) || []).length;
};

module.exports = { substrCount };