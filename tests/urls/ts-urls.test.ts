import Ofn from '../../index';
import { Request } from 'express';

const req: Pick<Request, 'protocol' | 'originalUrl' | 'get'> = {
    protocol: 'https',
    originalUrl: '/',
    get: ( key ) => { const obj = { host: 'example.com' }; return obj[ key ]; }
}

describe( 'fn: urlGetCurrentByReq', () => {
    test( 'fn: urlGetCurrentByReq( undefined )', () => {
        expect( Ofn.urlGetCurrentByReq( undefined ) ).toBe( '' );
    } );
    // test( 'fn: urlGetCurrentByReq( req bad )', () => {
    //     expect( Ofn.urlGetCurrentByReq( 'chacho' ) ).toBe( '' );
    // } );
    test( 'fn: urlGetCurrentByReq( req )', () => {
        expect( Ofn.urlGetCurrentByReq( req ) ).toBe( 'https://example.com/' );
    } );
    test( 'fn: urlGetCurrentByReq( req, false )', () => {
        expect( Ofn.urlGetCurrentByReq( req, false ) ).toBe( '/' );
    } );
} );

describe( 'fn: urlGetHostByReq', () => {
    test( 'fn: urlGetHostByReq( undefined )', () => {
        expect( Ofn.urlGetHostByReq( undefined ) ).toBe( '' );
    } );
    // test( 'fn: urlGetHostByReq( req bad )', () => {
    //     expect( Ofn.urlGetHostByReq( 'chacho' ) ).toBe( '' );
    // } );
    test( 'fn: urlGetHostByReq( req )', () => {
        expect( Ofn.urlGetHostByReq( req ) ).toBe( 'https://example.com' );
    } );
} );

describe( 'fn: urlIsValid', () => {
    test( 'fn: urlIsValid( undefined )', () => {
        expect( Ofn.urlIsValid( undefined ) ).toBe( false );
    } );
    test( 'fn: urlIsValid( url bad )', () => {
        expect( Ofn.urlIsValid( 'example.com' ) ).toBe( false );
    } );
    test( 'fn: urlIsValid( url )', () => {
        expect( Ofn.urlIsValid( 'https://example.com?chacho&tio=1' ) ).toBe( true );
    } );
} );

describe( 'fn: urlObjByUrl', () => {
    test( 'fn: urlObjByUrl( undefined )', () => {
        expect( Ofn.urlObjByUrl( undefined ) ).toBe( null );
    } );
    test( 'fn: urlObjByUrl( url bad )', () => {
        expect( Ofn.urlObjByUrl( 'example.com' ) ).toBe( null );
    } );
    test( 'fn: urlObjByUrl( url )', () => {
        expect( Ofn.type( Ofn.urlObjByUrl( 'https://example.com?chacho&tio=1' ) ) ).toBe( 'url' );
    } );
} );

describe( 'fn: urlGetBase', () => {
    test( 'fn: urlGetBase( undefined )', () => {
        expect( Ofn.urlGetBase( undefined ) ).toBe( '' );
    } );
    test( 'fn: urlGetBase( url bad )', () => {
        expect( Ofn.urlGetBase( 'example.com' ) ).toBe( '' );
    } );
    test( 'fn: urlGetBase( url )', () => {
        expect( Ofn.urlGetBase( 'https://example.com?chacho&tio=1' ) ).toBe( 'https://example.com' );
    } );
} );

describe( 'fn: urlGetParams', () => {
    test( 'fn: urlGetParams( undefined )', () => {
        expect( Ofn.urlGetParams( undefined ) ).toEqual( {} );
    } );
    test( 'fn: urlGetParams( url bad )', () => {
        expect( Ofn.urlGetParams( 'example.com?chacho&tio=1' ) ).toEqual( {} );
    } );
    test( 'fn: urlGetParams( url )', () => {
        expect( Ofn.urlGetParams( 'https://example.com?chacho&tio=1' ) ).toEqual( { chacho: '', tio: '1' } );
    } );
    test( 'fn: urlGetParams( query )', () => {
        expect( Ofn.urlGetParams( 'chacho&tio=1' ) ).toEqual( { chacho: '', tio: '1' } );
    } );
} );

describe( 'fn: urlEncode', () => {
    test( 'fn: urlEncode( undefined )', () => {
        expect( Ofn.urlEncode( undefined ) ).toBe( '' );
    } );
    test( 'fn: urlEncode( url bad )', () => {
        expect( Ofn.urlEncode( 'example.com?name=chacho tio&suma=1+2' ) )
            .toBe( 'example.com%3Fname%3Dchacho%20tio%26suma%3D1%2B2' );
    } );
    test( 'fn: urlEncode( url )', () => {
        expect( Ofn.urlEncode( 'https://example.com?name=chacho tio&suma=1+2' ) )
            .toBe( 'https%3A%2F%2Fexample.com%3Fname%3Dchacho%20tio%26suma%3D1%2B2' );
    } );
} );

describe( 'fn: urlDecode', () => {
    test( 'fn: urlDecode( undefined )', () => {
        expect( Ofn.urlDecode( undefined ) ).toBe( '' );
    } );
    test( 'fn: urlDecode( url bad )', () => {
        expect( Ofn.urlDecode( 'example.com%3Fname%3Dchacho%20tio%26suma%3D1%2B2' ) )
            .toBe( 'example.com?name=chacho tio&suma=1+2' );
    } );
    test( 'fn: urlDecode( url )', () => {
        expect( Ofn.urlDecode( 'https%3A%2F%2Fexample.com%3Fname%3Dchacho%20tio%26suma%3D1%2B2' ) )
            .toBe( 'https://example.com?name=chacho tio&suma=1+2' );
    } );
} );

describe( 'fn: urlStringToPlain', () => {
    test( 'fn: urlStringToPlain( undefined )', () => {
        expect( Ofn.urlStringToPlain( undefined ) ).toBe( '' );
    } );
    test( 'fn: urlStringToPlain( url bad )', () => {
        expect( Ofn.urlStringToPlain( 'example.com?name=chacho tio&suma=1+2' ) )
            .toBe( 'example.com?name%3dchacho%20tio&suma%3d1+2' );
    } );
    test( 'fn: urlStringToPlain( url )', () => {
        expect( Ofn.urlStringToPlain( 'https://example.com?name=chacho tio&suma=1+2' ) )
            .toBe( 'https://example.com?name%3dchacho%20tio&suma%3d1+2' );
    } );
} );

describe( 'fn: urlPlainToString', () => {
    test( 'fn: urlPlainToString( undefined )', () => {
        expect( Ofn.urlPlainToString( undefined ) ).toBe( '' );
    } );
    test( 'fn: urlPlainToString( url bad )', () => {
        expect( Ofn.urlPlainToString( 'example.com?name%3dchacho%20tio&suma%3d1+2' ) ).toBe( 'example.com?name=chacho tio&suma=1+2' );
    } );
    test( 'fn: urlPlainToString( url )', () => {
        expect( Ofn.urlPlainToString( 'https://example.com?name%3dchacho%20tio&suma%3d1+2' ) ).toBe( 'https://example.com?name=chacho tio&suma=1+2' );
    } );
} );