const urlGetCurrentByReq = function( req, isFullpath = true ) {
    if( ! req || ! req.originalUrl ) { return ''; }

    return isFullpath ? `${req.protocol}://${req.get( 'host' )}${req.originalUrl}` : `${req.originalUrl}`;
};

module.exports = { urlGetCurrentByReq };