import Ofn from '../../index';

describe( 'fn: isEven', () => {
    test( 'fn: isEven( undefined )', () => {
        expect( Ofn.isEven( undefined ) ).toBe( undefined );
    } );
    test( 'fn: isEven( null )', () => {
        expect( Ofn.isEven( null ) ).toBe( undefined );
    } );
    // test( 'fn: isEven( bool )', () => {
    //     expect( Ofn.isEven( true ) ).toBe( undefined );
    // } );
    test( 'fn: isEven( NaN )', () => {
        expect( Ofn.isEven( NaN ) ).toBe( undefined );
    } );
    test( 'fn: isEven( infinite )', () => {
        expect( Ofn.isEven( 1 / 0 ) ).toBe( undefined );
    } );
    test( 'fn: isEven( int 0 )', () => {
        expect( Ofn.isEven( 0 ) ).toBe( true );
    } );
    test( 'fn: isEven( int 1 )', () => {
        expect( Ofn.isEven( 1 ) ).toBe( false );
    } );
    test( 'fn: isEven( float 0 )', () => {
        expect( Ofn.isEven( 0.2 ) ).toBe( true );
    } );
    test( 'fn: isEven( float 1 )', () => {
        expect( Ofn.isEven( 1.2 ) ).toBe( false );
    } );
    // test( 'fn: isEven( str 0 )', () => {
    //     expect( Ofn.isEven( '0' ) ).toBe( true );
    // } );
    // test( 'fn: isEven( str 1 )', () => {
    //     expect( Ofn.isEven( '1' ) ).toBe( false );
    // } );
} );

describe( 'fn: isOdd', () => {
    test( 'fn: isOdd( undefined )', () => {
        expect( Ofn.isOdd( undefined ) ).toBe( undefined );
    } );
    test( 'fn: isOdd( null )', () => {
        expect( Ofn.isOdd( null ) ).toBe( undefined );
    } );
    // test( 'fn: isOdd( bool )', () => {
    //     expect( Ofn.isOdd( true ) ).toBe( undefined );
    // } );
    test( 'fn: isOdd( NaN )', () => {
        expect( Ofn.isOdd( NaN ) ).toBe( undefined );
    } );
    test( 'fn: isOdd( infinite )', () => {
        expect( Ofn.isOdd( 1 / 0 ) ).toBe( undefined );
    } );
    test( 'fn: isOdd( int 0 )', () => {
        expect( Ofn.isOdd( 0 ) ).toBe( false );
    } );
    test( 'fn: isOdd( int 1 )', () => {
        expect( Ofn.isOdd( 1 ) ).toBe( true );
    } );
    test( 'fn: isOdd( float 0 )', () => {
        expect( Ofn.isOdd( 0.2 ) ).toBe( false );
    } );
    test( 'fn: isOdd( float 1 )', () => {
        expect( Ofn.isOdd( 1.2 ) ).toBe( true );
    } );
    // test( 'fn: isOdd( str 0 )', () => {
    //     expect( Ofn.isOdd( '0' ) ).toBe( false );
    // } );
    // test( 'fn: isOdd( str 1 )', () => {
    //     expect( Ofn.isOdd( '1' ) ).toBe( true );
    // } );
} );

describe( 'fn: isNumeric', () => {
    test( 'fn: isNumeric( undefined )', () => {
        expect( Ofn.isNumeric( undefined ) ).toBe( false );
    } );
    test( 'fn: isNumeric( null )', () => {
        expect( Ofn.isNumeric( null ) ).toBe( false );
    } );
    // test( 'fn: isNumeric( bool )', () => {
    //     expect( Ofn.isNumeric( true ) ).toBe( false );
    // } );
    test( 'fn: isNumeric( NaN )', () => {
        expect( Ofn.isNumeric( NaN ) ).toBe( false );
    } );
    test( 'fn: isNumeric( infinite )', () => {
        expect( Ofn.isNumeric( 1 / 0 ) ).toBe( false );
    } );
    test( 'fn: isNumeric( int 0 )', () => {
        expect( Ofn.isNumeric( 0 ) ).toBe( true );
    } );
    test( 'fn: isNumeric( int 1 )', () => {
        expect( Ofn.isNumeric( 1 ) ).toBe( true );
    } );
    test( 'fn: isNumeric( float 0 )', () => {
        expect( Ofn.isNumeric( 0.2 ) ).toBe( true );
    } );
    test( 'fn: isNumeric( float 1 )', () => {
        expect( Ofn.isNumeric( 1.2 ) ).toBe( true );
    } );
    test( 'fn: isNumeric( str 0 )', () => {
        expect( Ofn.isNumeric( '0' ) ).toBe( true );
    } );
    test( 'fn: isNumeric( str 1 )', () => {
        expect( Ofn.isNumeric( '1' ) ).toBe( true );
    } );
    test( 'fn: isNumberic( str 1 )', () => {
        expect( Ofn.isNumeric( '1' ) ).toBe( true );
    } );
} );

describe( 'fn: randomMinMax', () => {
    test( 'fn: randomMinMax()', () => {
        let val = Ofn.randomMinMax();
        expect( val ).toBeGreaterThanOrEqual( 0 );
        expect( val ).toBeLessThanOrEqual( 100 );
    } );
    // test( 'fn: randomMinMax( str, bool )', () => {
    //     let val = Ofn.randomMinMax( 't', true );
    //     expect( val ).toBeGreaterThanOrEqual( 0 );
    //     expect( val ).toBeLessThanOrEqual( 100 );
    // } );
    test( 'fn: randomMinMax( 101 )', () => {
        let val = Ofn.randomMinMax( 101 );
        expect( val ).toBeGreaterThanOrEqual( 100 );
        expect( val ).toBeLessThanOrEqual( 101 );
    } );
    test( 'fn: randomMinMax( 10, 20 )', () => {
        let val = Ofn.randomMinMax( 10, 20 );
        expect( val ).toBeGreaterThanOrEqual( 10 );
        expect( val ).toBeLessThanOrEqual( 20 );
    } );
    test( 'fn: randomMinMax( 20, 10 )', () => {
        let val = Ofn.randomMinMax( 20, 10 );
        expect( val ).toBeGreaterThanOrEqual( 10 );
        expect( val ).toBeLessThanOrEqual( 20 );
    } );
    test( 'fn: randomMinMax( -20, -10 )', () => {
        let val = Ofn.randomMinMax( -20, -10 );
        expect( val ).toBeGreaterThanOrEqual( -20 );
        expect( val ).toBeLessThanOrEqual( -10 );
    } );
} );

describe( 'fn: numberFixDecimals', () => {
    test( 'fn: numberFixDecimals()', () => {
        expect( Ofn.numberFixDecimals( undefined ) ).toBe( undefined );
    } );
    // test( 'fn: numberFixDecimals( bool )', () => {
    //     expect( Ofn.numberFixDecimals( true ) ).toBe( true );
    // } );
    test( 'fn: numberFixDecimals( str bad )', () => {
        expect( Ofn.numberFixDecimals( 'chacho' ) ).toBe( 'chacho' );
    } );
    test( 'fn: numberFixDecimals( str bad comma )', () => {
        expect( Ofn.numberFixDecimals( '1,2,3' ) ).toBe( '1,2,3' );
    } );

    test( 'fn: numberFixDecimals( str ok comma )', () => {
        expect( Ofn.numberFixDecimals( '2,1499' ) ).toBe( '2.15' );
    } );
    test( 'fn: numberFixDecimals( str ok )', () => {
        expect( Ofn.numberFixDecimals( '2.1499' ) ).toBe( '2.15' );
    } );
    test( 'fn: numberFixDecimals( float )', () => {
        expect( Ofn.numberFixDecimals( 12.5 ) ).toBe( '12.50' );
    } );
    test( 'fn: numberFixDecimals( float long )', () => {
        expect( Ofn.numberFixDecimals( 12.4996 ) ).toBe( '12.50' );
    } );

    test( 'fn: numberFixDecimals( float, 0 )', () => {
        expect( Ofn.numberFixDecimals( '2.1499', 0 ) ).toBe( '2' );
    } );
    test( 'fn: numberFixDecimals( float, 0 )', () => {
        expect( Ofn.numberFixDecimals( '2.1499', -3 ) ).toBe( '2' );
    } );
    test( 'fn: numberFixDecimals( float, len )', () => {
        expect( Ofn.numberFixDecimals( '2.1499', 3 ) ).toBe( '2.150' );
    } );
    test( 'fn: numberFixDecimals( float, len 6 )', () => {
        expect( Ofn.numberFixDecimals( '2.1499', 6 ) ).toBe( '2.149900' );
    } );
    test( 'fn: numberFixDecimals( float, false )', () => {
        expect( Ofn.numberFixDecimals( '2.1499', false ) ).toBe( '2.1499' );
    } );
    test( 'fn: numberFixDecimals( float, false2 )', () => {
        expect( Ofn.numberFixDecimals( '2.1490', false ) ).toBe( '2.1490' );
    } );

    test( 'fn: numberFixDecimals( float, len, noz )', () => {
        expect( Ofn.numberFixDecimals( '2.1499', 6, false ) ).toBe( '2.1499' );
    } );
    test( 'fn: numberFixDecimals( float, len2, noz )', () => {
        expect( Ofn.numberFixDecimals( '2.1499', 3, false ) ).toBe( '2.15' );
    } );
    test( 'fn: numberFixDecimals( float, len, noz, 3 )', () => {
        expect( Ofn.numberFixDecimals( '2.1499', 3, false, 3 ) ).toBe( '2.150' );
    } );

    test( 'fn: numberFixDecimals( float, len, noz, 2 )', () => {
        expect( Ofn.numberFixDecimals( '2.1387', 3, false, 2 ) ).toBe( '2.139' );
    } );
    test( 'fn: numberFixDecimals( float1, len, noz, 2 )', () => {
        expect( Ofn.numberFixDecimals( '2.1999', 3, false, 2 ) ).toBe( '2.20' );
    } );

    test( 'fn: numberFixDecimals( int )', () => {
        expect( Ofn.numberFixDecimals( 12 ) ).toBe( '12.00' );
    } );
    test( 'fn: numberFixDecimals( int, false )', () => {
        expect( Ofn.numberFixDecimals( 12, false ) ).toBe( '12' );
    } );
    test( 'fn: numberFixDecimals( int, 0 )', () => {
        expect( Ofn.numberFixDecimals( 12, 0 ) ).toBe( '12' );
    } );
    test( 'fn: numberFixDecimals( int, len, noz )', () => {
        expect( Ofn.numberFixDecimals( 12, 2, false ) ).toBe( '12' );
    } );
    test( 'fn: numberFixDecimals( int, len, allow )', () => {
        expect( Ofn.numberFixDecimals( 12, 2, true ) ).toBe( '12.00' );
    } );
    test( 'fn: numberFixDecimals( int, len, allow, false )', () => {
        expect( Ofn.numberFixDecimals( 12, 2, true, false ) ).toBe( '12' );
    } );

} );

describe( 'fn: numberPrintDecimals', () => {
    test( 'fn: numberPrintDecimals()', () => {
        expect( Ofn.numberPrintDecimals( undefined ) ).toBe( undefined );
    } );
    // test( 'fn: numberPrintDecimals( bool )', () => {
    //     expect( Ofn.numberPrintDecimals( true ) ).toBe( true );
    // } );
    test( 'fn: numberPrintDecimals( str bad )', () => {
        expect( Ofn.numberPrintDecimals( 'chacho' ) ).toBe( 'chacho' );
    } );
    test( 'fn: numberPrintDecimals( str bad comma )', () => {
        expect( Ofn.numberPrintDecimals( '1.2,3' ) ).toBe( '1.2,3' );
    } );
    test( 'fn: numberPrintDecimals( str ok )', () => {
        expect( Ofn.numberPrintDecimals( '12.5' ) ).toBe( '12,50' );
    } );
    test( 'fn: numberPrintDecimals( str ok comma )', () => {
        expect( Ofn.numberPrintDecimals( '12,5' ) ).toBe( '12,50' );
    } );
    test( 'fn: numberPrintDecimals( float )', () => {
        expect( Ofn.numberPrintDecimals( 12.5 ) ).toBe( '12,50' );
    } );
    test( 'fn: numberPrintDecimals( float long )', () => {
        expect( Ofn.numberPrintDecimals( 12.4996 ) ).toBe( '12,50' );
    } );
    test( 'fn: numberPrintDecimals( float, 0 )', () => {
        expect( Ofn.numberPrintDecimals( 12.4996, 0 ) ).toBe( '12' );
    } );
    test( 'fn: numberPrintDecimals( float, len )', () => {
        expect( Ofn.numberPrintDecimals( 12.4996, 3 ) ).toBe( '12,500' );
    } );
    test( 'fn: numberPrintDecimals( float, false )', () => {
        expect( Ofn.numberPrintDecimals( 12.4996, false ) ).toBe( '12,4996' );
    } );
    test( 'fn: numberPrintDecimals( float, len, noz )', () => {
        expect( Ofn.numberPrintDecimals( 12.4996, 3, false ) ).toBe( '12,50' );
    } );
    test( 'fn: numberPrintDecimals( float2, len, noz )', () => {
        expect( Ofn.numberPrintDecimals( 12.4993, 3, false ) ).toBe( '12,499' );
    } );
    test( 'fn: numberPrintDecimals( float, len, minz )', () => {
        expect( Ofn.numberPrintDecimals( 12.4996, 3, false, 4 ) ).toBe( '12,5000' );
    } );
    test( 'fn: numberPrintDecimals( float, -len, minz )', () => {
        expect( Ofn.numberPrintDecimals( 12.4996, -3 ) ).toBe( '12' );
    } );
    test( 'fn: numberPrintDecimals( float, len, -minz )', () => {
        expect( Ofn.numberPrintDecimals( 12.4996, 3, false, -4 ) ).toBe( '12,5' );
    } );
} );
