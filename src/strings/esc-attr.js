const { htmlspecialchars } = require( 'oro-php-locutus' );

const escAttr = function( str ) {
    str = str === 0 ? str + '' : str || '';
    str = str.toString();

    if( ! str.length ) { return ''; }

    // wp_check_invalid_utf8 / .match fails when it encounters invalid UTF8 in $string.
    if( ! str.match( /^./us ) || str.match( /^./us ).length !== 1 ) { return ''; }

    // _wp_specialchars / Don't bother if there are no specialchars - saves some processing.
    if( ! str.match( /[&<>"\']/ ) ) { return str; }

    // wp_kses_normalize_entities / Disarm all entities by converting & to &amp;
    str = str.replace( /&/g, '&amp;' );

    str = htmlspecialchars( str, 'ENT_QUOTES', 'UTF-8', false );

    return str;
};

module.exports = { escAttr };