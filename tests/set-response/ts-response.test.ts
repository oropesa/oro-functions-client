import Ofn from '../../index';

describe( 'fn: setResponseOK', () => {
    test( 'fn: setResponseOK( undefined )', () => {
        expect( Ofn.setResponseOK() ).toEqual( { status: true } );
    } );
    test( 'fn: setResponseOK( str )', () => {
        expect( Ofn.setResponseOK( 'chacho' ) ).toEqual( { status: true, msg: 'chacho' } );
    } );
    test( 'fn: setResponseOK( obj )', () => {
        expect( Ofn.setResponseOK( { chacho: true } ) ).toEqual( { status: true, chacho: true } );
    } );
    test( 'fn: setResponseOK( obj2 )', () => {
        expect( Ofn.setResponseOK( { status: 'tio', chacho: true } ) )
            .toEqual( { status: true, chacho: true } );
    } );
    test( 'fn: setResponseOK( obj2 )', () => {
        interface Custom { chacho: boolean, status: string }
        const response = Ofn.setResponseOK<Custom>( { status: 'tio', chacho: true } );
        expect( response ).toEqual( { status: true, chacho: true } );
    } );
    test( 'fn: setResponseOK( obj3 )', () => {
        expect( Ofn.setResponseOK( { data: { status: 'tio', chacho: true } } ) )
            .toEqual( { status: true, data: { status: 'tio', chacho: true } } );
    } );
    test( 'fn: setResponseOK( null, obj )', () => {
        expect( Ofn.setResponseOK( null, { chacho: true } ) )
            .toEqual( { status: true, chacho: true } );
    } );
    test( 'fn: setResponseOK( null, obj ) T', () => {
        interface Custom { chacho: boolean }
        const response = Ofn.setResponseOK<Custom>( null, { chacho: true } )
        expect( response ).toEqual( { status: true, chacho: true } );
    } );
    test( 'fn: setResponseOK( null, obj.msg )', () => {
        expect( Ofn.setResponseOK( null, { msg: 'tio' } ) )
            .toEqual( { status: true, msg: 'tio' } );
    } );
    test( 'fn: setResponseOK( str, obj.msg )', () => {
        expect( Ofn.setResponseOK( 'chacho', { msg: 'tio' } ) )
            .toEqual( { status: true, msg: 'chacho tio' } );
    } );
} );

describe( 'fn: setResponseKO', () => {
    test( 'fn: setResponseKO( undefined )', () => {
        expect( Ofn.setResponseKO() ).toEqual( { status: false } );
    } );
    test( 'fn: setResponseKO( str )', () => {
        expect( Ofn.setResponseKO( 'chacho' ) )
            .toEqual( { status: false, error: { msg: 'chacho' } } );
    } );
    test( 'fn: setResponseKO( obj )', () => {
        expect( Ofn.setResponseKO( { chacho: true } ) )
            .toEqual( { status: false, error: { chacho: true } } );
    } );
    test( 'fn: setResponseKO( obj2 )', () => {
        expect( Ofn.setResponseKO( { status: 'tio', chacho: true } ) )
            .toEqual( { status: false, error: { status: 'tio', chacho: true } } );
    } );
    test( 'fn: setResponseKO( obj2 T )', () => {
        interface Custom { status: string, chacho: boolean }
        const response = Ofn.setResponseKO<Custom>( { status: 'tio', chacho: true } );
        expect( response )
            .toEqual( { status: false, error: { status: 'tio', chacho: true } } );
    } );
    test( 'fn: setResponseKO( null, obj )', () => {
        expect( Ofn.setResponseKO( null, { chacho: true } ) )
            .toEqual( { status: false, error: { chacho: true } } );
    } );
    test( 'fn: setResponseKO( null, obj ) T', () => {
        interface Custom { chacho: boolean }
        const response = Ofn.setResponseKO<Custom>( null, { chacho: true } )
        expect( response ).toEqual( { status: false, error: { chacho: true } } );
    } );
    test( 'fn: setResponseKO( null, obj.msg )', () => {
        expect( Ofn.setResponseKO( null, { msg: 'tio' } ) )
            .toEqual( { status: false, error: { msg: 'tio' } } );
    } );
    test( 'fn: setResponseKO( str, obj.msg )', () => {
        expect( Ofn.setResponseKO( 'chacho', { msg: 'tio' } ) )
            .toEqual( { status: false, error: { msg: 'chacho tio' } } );
    } );
    test( 'fn: setResponseKO( str, null, tryAgain )', () => {
        expect( Ofn.setResponseKO( 'chacho', null, true ) )
            .toEqual( { status: false, error: { msg: 'chacho' }, tryAgain: true } );
    } );
    test( 'fn: setResponseKO( str, null, null, asError )', () => {
        let response = Ofn.setResponseKO( 'chacho', null, null, true );
        let error = new Error( 'chacho' );

        expect( response ).toEqual( error );
        expect( Ofn.type( response ) ).toEqual( 'error' );
        expect( response.name ).toBe( 'responseError' );
    } );
    test( 'fn: setResponseKO( str, obj, null, asError ) T', () => {
        interface Custom { chacho: boolean }
        let response = Ofn.setResponseKO<Custom, true>( 'chacho', { chacho: true }, null, true );

        expect( Ofn.type( response ) ).toEqual( 'error' );
        expect( response.name ).toBe( 'responseError' );
        expect( response.responseError.error.chacho ).toBe( true );
    } );
    test( 'fn: setResponseKO( str, obj, null, asError )', () => {
        let responseKO = Ofn.setResponseKO( 'chacho', { errorName: 'customError' } );
        let response = Ofn.setResponseKO( 'chacho', { errorName: 'customError' }, null, true );
        let error = new Error( 'chacho' );

        expect( response ).toEqual( error );
        expect( Ofn.type( response ) ).toEqual( 'error' );
        expect( response.name ).toBe( 'customError' );
        expect( response.responseError ).toEqual( responseKO );
    } );
} );