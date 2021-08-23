const Ofn = require( '../index' );

describe('fn: issetGet', () => {
    test( 'fn: issetGet()', () => {
        expect( Ofn.issetGet( undefined ) ).toBe( null );
        expect( Ofn.issetGet( undefined, 'param' ) ).toBe( null );
        expect( Ofn.issetGet( undefined, 'param', 'test' ) ).toBe( 'test' );
        expect( Ofn.issetGet( undefined, 'param', 'test', false ) ).toBe( 'test' );
    });

    test( 'fn: issetGet( null )', () => {
        expect( Ofn.issetGet( null ) ).toBe( null );
        expect( Ofn.issetGet( null, 'param' ) ).toBe( null );
        expect( Ofn.issetGet( null, 'param', 'test' ) ).toBe( 'test' );
        expect( Ofn.issetGet( null, 'param', 'test', false ) ).toBe( 'test' );
    });

    test( 'fn: issetGet( bool )', () => {
        expect( Ofn.issetGet( true ) ).toBe( null );
        expect( Ofn.issetGet( true, 'param' ) ).toBe( null );
        expect( Ofn.issetGet( true, 'param', 'test' ) ).toBe( 'test' );
        expect( Ofn.issetGet( true, 'param', 'test', false ) ).toBe( 'test' );
    });

    test( 'fn: issetGet( int )', () => {
        expect( Ofn.issetGet( 1 ) ).toBe( null );
        expect( Ofn.issetGet( 1, 'param' ) ).toBe( null );
        expect( Ofn.issetGet( 1, 'param', 'test' ) ).toBe( 'test' );
        expect( Ofn.issetGet( 1, 'param', 'test', false ) ).toBe( 'test' );
    });

    test( 'fn: issetGet( arr )', () => {
        expect( Ofn.issetGet( [] ) ).toBe( null );
        expect( Ofn.issetGet( [], 'param' ) ).toBe( null );
        expect( Ofn.issetGet( [], 'param', 'test' ) ).toBe( 'test' );
        expect( Ofn.issetGet( [], 'param', 'test', false ) ).toBe( 'test' );

        expect( Ofn.issetGet( [ 0, 1, 2 ] ) ).toBe( null );
        expect( Ofn.issetGet( [ 0, 1, 2 ], 'param' ) ).toBe( null );
        expect( Ofn.issetGet( [ 0, 1, 2 ], 'param', 'test' ) ).toBe( 'test' );
        expect( Ofn.issetGet( [ 0, 1, 2 ], 'param', 'test', false ) ).toBe( 'test' );
        expect( Ofn.issetGet( [ 0, 1, 2 ], 0, 'test' ) ).toBe( 0 );
        expect( Ofn.issetGet( [ 0, 1, 2 ], 1, 'test' ) ).toBe( 1 );
        expect( Ofn.issetGet( [ 0, 1, 2 ], 0, 'test', false ) ).toBe( 'test' );
    });

    test( "fn: issetGet( obj )", () => {
        expect( Ofn.issetGet( {} ) ).toBe( null );
        expect( Ofn.issetGet( {}, 'param' ) ).toBe( null );
        expect( Ofn.issetGet( {}, 'param', 'test' ) ).toBe( 'test' );
        expect( Ofn.issetGet( {}, 'param', 'test', false ) ).toBe( 'test' );

        expect( Ofn.issetGet( { chacho: 'loco', tio: '' } ) ).toBe( null );
        expect( Ofn.issetGet( { chacho: 'loco', tio: '' }, 'param' ) ).toBe( null );
        expect( Ofn.issetGet( { chacho: 'loco', tio: '' }, 'param', 'test' ) ).toBe( 'test' );
        expect( Ofn.issetGet( { chacho: 'loco', tio: '' }, 'param', 'test', false ) ).toBe( 'test' );
        expect( Ofn.issetGet( { chacho: 'loco', tio: '' }, 'chacho', 'test' ) ).toBe( 'loco' );
        expect( Ofn.issetGet( { chacho: 'loco', tio: '' }, 'tio', 'test' ) ).toBe( '' );
        expect( Ofn.issetGet( { chacho: 'loco', tio: '' }, 'tio', 'test', false ) ).toBe( 'test' );
    });
});

describe('fn: type', () => {
    test( 'fn: type( undefined )', () => { expect( Ofn.type( undefined    ) ).toBe( 'undefined' ); } );
    test( 'fn: type( null )'     , () => { expect( Ofn.type( null         ) ).toBe( 'null'      ); } );
    test( 'fn: type( bool )'     , () => { expect( Ofn.type( true         ) ).toBe( 'boolean'   ); } );
    test( 'fn: type( int )'      , () => { expect( Ofn.type( 1            ) ).toBe( 'number'    ); } );
    test( 'fn: type( float )'    , () => { expect( Ofn.type( 1.2          ) ).toBe( 'number'    ); } );
    test( 'fn: type( NaN )'      , () => { expect( Ofn.type( NaN               ) ).toBe( 'number'    ); } );
    test( 'fn: type( infinite )' , () => { expect( Ofn.type( 1/0          ) ).toBe( 'number'    ); } );
    test( 'fn: type( str )'      , () => { expect( Ofn.type( ''           ) ).toBe( 'string'    ); } );
    test( 'fn: type( arr )'      , () => { expect( Ofn.type( []           ) ).toBe( 'array'     ); } );
    test( 'fn: type( obj )'      , () => { expect( Ofn.type( {}           ) ).toBe( 'object'    ); } );
    test( 'fn: type( date )'     , () => { expect( Ofn.type( (new Date())      ) ).toBe( 'date'      ); } );
    test( 'fn: type( function )' , () => { expect( Ofn.type( (()=>{})          ) ).toBe( 'function'  ); } );
    test( 'fn: type( regexp )'   , () => { expect( Ofn.type( /([A-Z])\w+/ ) ).toBe( 'regexp'    ); } );
});

describe('fn: is(Type)', () => {
    test( 'fn: isBoolean()'      , () => { expect( Ofn.isBoolean() ).toBe( false ); } );
    test( 'fn: isBoolean( bool )', () => { expect( Ofn.isBoolean( false ) ).toBe( true ); } );

    test( 'fn: isNumber()'     , () => { expect( Ofn.isNumber() ).toBe( false ); } );
    test( 'fn: isNumber( int )', () => { expect( Ofn.isNumber( 1 ) ).toBe( true ); } );
    test( 'fn: isNumber( NaN )', () => { expect( Ofn.isNumber( NaN ) ).toBe( true ); } );

    test( 'fn: isString()'     , () => { expect( Ofn.isString() ).toBe( false ); } );
    test( 'fn: isString( str )', () => { expect( Ofn.isString( '1' ) ).toBe( true ); } );

    test( 'fn: isArray()'     , () => { expect( Ofn.isArray() ).toBe( false ); } );
    test( 'fn: isArray( arr )', () => { expect( Ofn.isArray( [] ) ).toBe( true ); } );

    test( 'fn: isObject()'     , () => { expect( Ofn.isObject() ).toBe( false ); } );
    test( 'fn: isObject( obj )', () => { expect( Ofn.isObject( {} ) ).toBe( true ); } );

    test( 'fn: isRegexp()'        , () => { expect( Ofn.isRegexp() ).toBe( false ); } );
    test( 'fn: isRegexp( regexp )', () => { expect( Ofn.isRegexp( /([A-Z])\w+/ ) ).toBe( true ); } );

    test( 'fn: isDate()'      , () => { expect( Ofn.isDate() ).toBe( false ); } );
    test( 'fn: isDate( date )', () => { expect( Ofn.isDate( new Date() ) ).toBe( true ); } );

    test( 'fn: isUndefined()'     , () => { expect( Ofn.isUndefined() ).toBe( true ); } );
    test( 'fn: isUndefined( obj )', () => { expect( Ofn.isUndefined( {} ) ).toBe( false ); } );

    test( 'fn: isNull()'      , () => { expect( Ofn.isNull() ).toBe( false ); } );
    test( 'fn: isNull( null )', () => { expect( Ofn.isNull( null ) ).toBe( true ); } );
    test( 'fn: isNull( obj )' , () => { expect( Ofn.isNull( {} ) ).toBe( false ); } );

    test( 'fn: isNully()'      , () => { expect( Ofn.isNully() ).toBe( true ); } );
    test( 'fn: isNully( null )', () => { expect( Ofn.isNully( null ) ).toBe( true ); } );
    test( 'fn: isNully( obj )' , () => { expect( Ofn.isNully( {} ) ).toBe( false ); } );

});
