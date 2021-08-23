const Ofn = require( '../index' );
const { performance } = require( 'perf_hooks' );

describe('fn: sleep', () => {
    test( 'fn: sleep()' , async () => {
        let start = performance.now();
        await Ofn.sleep();
        let end = performance.now();
        expect( end- start ).toBeLessThan(   90 );
    } );
    test( 'fn: sleep( 1000 )' , async () => {
        let start = performance.now();
        await Ofn.sleep( 1000 );
        let end = performance.now();
        expect( end- start ).toBeGreaterThan( 990 );
        expect( end- start ).toBeLessThan(  1100 );
    } );
    test( 'fn: sleep( 3000 )' , async () => {
        let start = performance.now();
        await Ofn.sleep( 2000 );
        let end = performance.now();
        expect( end- start ).toBeGreaterThan( 1990 );
        expect( end- start ).toBeLessThan(  2100 );
    } );
});

describe('fn: getFunctionName', () => {
    function testGetFunctionName() { return Ofn.getFunctionName(); }
    let chacho = testGetFunctionName;

    test( 'fn: sleep()' , async () => {
        expect( testGetFunctionName() ).toBe(   'testGetFunctionName' );
        expect( Ofn.getFunctionName( chacho ) ).toBe(   'testGetFunctionName' );
        expect( Ofn.getFunctionName( 'chacho' ) ).toBe(   '' );
    } );
});