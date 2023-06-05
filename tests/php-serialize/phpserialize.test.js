const Ofn = require( '../../index' );

describe( 'fn: phpSerialize', () => {
    test( 'fn: phpSerialize( undefined )', () => {
        expect( Ofn.phpSerialize() ).toBe( undefined );
    } );
    test( 'fn: phpSerialize( str )', () => {
        expect( Ofn.phpSerialize( 'chacho' ) ).toBe( 'chacho' );
    } );
    test( 'fn: phpSerialize( obj )', () => {
        expect( Ofn.phpSerialize( { chacho: true } ) ).toBe( '{"chacho":true}' );
    } );
    test( 'fn: phpSerialize( obj, strict )', () => {
        expect( Ofn.phpSerialize( { chacho: true }, true ) ).toBe( 'a:1:{s:6:"chacho";b:1;}' );
    } );
} );

describe( 'fn: phpUnserialize', () => {
    test( 'fn: phpUnserialize( undefined )', () => {
        expect( Ofn.phpUnserialize() ).toBe( undefined );
    } );
    test( 'fn: phpUnserialize( str )', () => {
        expect( Ofn.phpUnserialize( 'chacho' ) ).toBe( 'chacho' );
    } );
    test( 'fn: phpUnserialize( str php )', () => {
        expect( Ofn.phpUnserialize( 'a:1:{s:6:\"chacho\";b:1;}' ) ).toEqual( { chacho: true } );
    } );
    test( 'fn: phpUnserialize( str json )', () => {
        expect( Ofn.phpUnserialize( '{"chacho":true}' ) ).toEqual( { chacho: true } );
    } );
    test( 'fn: phpUnserialize( str json, strict )', () => {
        expect( Ofn.phpUnserialize( '{"chacho":true}', true ) ).toBe( '{"chacho":true}' );
    } );
} );

describe( 'fn: phpIsSerialized', () => {
    test( 'fn: phpIsSerialized( undefined )', () => {
        expect( Ofn.phpIsSerialized() ).toBe( false );
    } );
    test( 'fn: phpIsSerialized( str bad )', () => {
        expect( Ofn.phpIsSerialized( 'chacho' ) ).toBe( false );
    } );
    test( 'fn: phpIsSerialized( str json bad )', () => {
        expect( Ofn.phpIsSerialized( '{"chacho":true}' ) ).toBe( false );
    } );
    test( 'fn: phpIsSerialized( str )', () => {
        expect( Ofn.phpIsSerialized( 'a:1:{s:6:"chacho";b:1;}' ) ).toBe( true );
    } );
} );