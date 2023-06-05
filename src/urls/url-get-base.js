const { urlObjByUrl } = require( './url-obj-by-url' );

const urlGetBase = function( url ) {
    let urlObj = urlObjByUrl( url );
    if( ! urlObj ) { return ''; }

    return urlObj.origin;
};

module.exports = { urlGetBase };