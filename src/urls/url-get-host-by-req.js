const urlGetHostByReq = function( req ) {
    if( ! req || ! req.originalUrl ) { return ''; }

    return `${req.protocol}://${req.get( 'host' )}`;
};

module.exports = { urlGetHostByReq };