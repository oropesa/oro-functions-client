const { isObject } = require( '../general/is-object' );

const objToStringSqlSet = function( obj ) {
    if( ! isObject( obj ) ) { return ''; }

    let str = '';
    Object.keys( obj ).forEach( key => {
        !! str && ( str += ',' );
        str += ` ${key} = ${obj[ key ]}`;
    } );
    return str.length ? `${str} ` : str;
};

// objToStringSqlSet( { id: 20, name: "'oro'", today: 'NOW()' } );
// -> " id = 20, name = 'oro', today = NOW() "

module.exports = { objToStringSqlSet };