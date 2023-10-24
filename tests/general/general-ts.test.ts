import Ofn from '../../dist';

describe('fn: issetGet', () => {
  // test('fn: issetGet()', () => {
  //   expect( Ofn.issetGet( undefined ) ).toBe( null );
  //   expect(Ofn.issetGet(undefined, 'param')).toBe(null);
  //   expect(Ofn.issetGet(undefined, 'param', 'test')).toBe('test');
  //   expect(Ofn.issetGet(undefined, 'param', 'test', false)).toBe('test');
  // });

  // test('fn: issetGet( null )', () => {
  //   // expect( Ofn.issetGet( null ) ).toBe( null );
  //   expect(Ofn.issetGet(null, 'param')).toBe(null);
  //   expect(Ofn.issetGet(null, 'param', 'test')).toBe('test');
  //   expect(Ofn.issetGet(null, 'param', 'test', false)).toBe('test');
  // });

  // test( 'fn: issetGet( bool )', () => {
  //     expect( Ofn.issetGet( true ) ).toBe( null );
  //     expect( Ofn.issetGet( true, 'param' ) ).toBe( null );
  //     expect( Ofn.issetGet( true, 'param', 'test' ) ).toBe( 'test' );
  //     expect( Ofn.issetGet( true, 'param', 'test', false ) ).toBe( 'test' );
  // } );

  // test( 'fn: issetGet( int )', () => {
  //     expect( Ofn.issetGet( 1 ) ).toBe( null );
  //     expect( Ofn.issetGet( 1, 'param' ) ).toBe( null );
  //     expect( Ofn.issetGet( 1, 'param', 'test' ) ).toBe( 'test' );
  //     expect( Ofn.issetGet( 1, 'param', 'test', false ) ).toBe( 'test' );
  // } );

  test('fn: issetGet( arr )', () => {
    // expect( Ofn.issetGet( [] ) ).toBe( null );
    // expect( Ofn.issetGet( [], 'param' ) ).toBe( null );
    // expect( Ofn.issetGet( [], 'param', 'test' ) ).toBe( 'test' );
    // expect( Ofn.issetGet( [], 'param', 'test', false ) ).toBe( 'test' );

    // expect( Ofn.issetGet( [ 0, 1, 2 ] ) ).toBe( null );
    // expect( Ofn.issetGet( [ 0, 1, 2 ], 'param' ) ).toBe( null );
    // expect( Ofn.issetGet( [ 0, 1, 2 ], 'param', 'test' ) ).toBe( 'test' );
    // expect( Ofn.issetGet( [ 0, 1, 2 ], 'param', 'test', false ) ).toBe( 'test' );
    expect(Ofn.issetGet([0, 1, 2], 0, 'test')).toBe(0);
    expect(Ofn.issetGet([0, 1, 2], 1, 'test')).toBe(1);
    expect(Ofn.issetGet([0, 1, 2], 0, 'test', false)).toBe('test');
  });

  test('fn: issetGet( obj )', () => {
    // expect( Ofn.issetGet( {} ) ).toBe( null );
    // expect( Ofn.issetGet( {}, 'param' ) ).toBe( null );
    // expect( Ofn.issetGet( {}, 'param', 'test' ) ).toBe( 'test' );
    // expect( Ofn.issetGet( {}, 'param', 'test', false ) ).toBe( 'test' );

    // expect( Ofn.issetGet( { chacho: 'loco', tio: '' } ) ).toBe( null );
    // expect( Ofn.issetGet( { chacho: 'loco', tio: '' }, 'param' ) ).toBe( null );
    // expect( Ofn.issetGet( { chacho: 'loco', tio: '' }, 'param', 'test' ) ).toBe( 'test' );
    // expect( Ofn.issetGet( { chacho: 'loco', tio: '' }, 'param', 'test', false ) ).toBe( 'test' );
    expect(Ofn.issetGet({ chacho: 'loco', tio: '' }, 'chacho', 'test')).toBe('loco');
    expect(Ofn.issetGet({ chacho: 'loco', tio: '' }, 'tio', 'test')).toBe('');
    expect(Ofn.issetGet({ chacho: 'loco', tio: '' }, 'tio', 'test', false)).toBe('test');

    interface NumberObject {
      chacho: number;
      tio: number;
    }
    interface StringObject {
      chacho: string;
      tio: string;
    }

    expect(Ofn.issetGet({ chacho: 'loco', tio: '' }, 'chacho', 'test')).toBe('loco');
    expect(Ofn.issetGet<number, NumberObject>({ chacho: 5, tio: 7 }, 'chacho', 9)).toBe(5);
    expect(Ofn.issetGet<string, StringObject>({ chacho: 'loco', tio: '' }, 'tio', 'test')).toBe('');
    expect(
      Ofn.issetGet<string, StringObject, keyof StringObject>(
        { chacho: 'loco', tio: '' },
        'tio',
        'test',
        false,
      ),
    ).toBe('test');
  });
});

describe('fn: type', () => {
  // test('fn: type( undefined )', () => {
  //   expect(Ofn.type(undefined)).toBe('undefined');
  // });
  test('fn: type( null )', () => {
    expect(Ofn.type(null)).toBe('null');
  });
  test('fn: type( bool )', () => {
    expect(Ofn.type(true)).toBe('boolean');
  });
  // test('fn: type( boolean )', () => {
  //   expect(Ofn.type(new Boolean(true))).toBe('boolean');
  // });
  test('fn: type( int )', () => {
    expect(Ofn.type(1)).toBe('number');
  });
  // test('fn: type( number )', () => {
  //   expect(Ofn.type(new Number(1))).toBe('number');
  // });
  test('fn: type( float )', () => {
    expect(Ofn.type(1.2)).toBe('number');
  });
  test('fn: type( NaN )', () => {
    expect(Ofn.type(Number.NaN)).toBe('number');
  });
  test('fn: type( infinite )', () => {
    expect(Ofn.type(1 / 0)).toBe('number');
  });
  test('fn: type( str )', () => {
    expect(Ofn.type('')).toBe('string');
  });
  // test('fn: type( string )', () => {
  //   expect(Ofn.type(new String(''))).toBe('string');
  // });
  test('fn: type( arr )', () => {
    expect(Ofn.type([])).toBe('array');
  });
  test('fn: type( obj )', () => {
    expect(Ofn.type({})).toBe('object');
  });
  test('fn: type( date )', () => {
    expect(Ofn.type(new Date())).toBe('date');
  });
  test('fn: type( function )', () => {
    expect(Ofn.type(() => {})).toBe('function');
  });
  test('fn: type( regexp )', () => {
    expect(Ofn.type(/([A-Z])\w+/)).toBe('regexp');
  });
  test('fn: type( class )', () => {
    expect(Ofn.type(Ofn)).toBe('class');
  });

  test('fn: type( class strict )', () => {
    expect(Ofn.type(Ofn, true)).toBe('class');
  });
  test('fn: type( var function )', () => {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    let chacho = () => {};
    expect(Ofn.type(chacho)).toBe('function');
  });
  test('fn: type( var obj class )', () => {
    // @ts-ignore
    let chacho = new Ofn();
    expect(Ofn.type(chacho)).toBe('object');
  });
  test('fn: type( var obj class strict )', () => {
    // @ts-ignore
    let chacho = new Ofn();
    expect(Ofn.type(chacho, true)).toBe('Ofn');
  });
  test('fn: type( var function strict )', () => {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    let chacho = () => {};
    expect(Ofn.type(chacho, true)).toBe('function');
  });
  test('fn: type( var number strict )', () => {
    let chacho = 5;
    expect(Ofn.type(chacho, true)).toBe('number');
  });
  // test('fn: type( var obj number strict )', () => {
  //   let chacho = new Number(5);
  //   expect(Ofn.type(chacho, true)).toBe('Number');
  // });
  // test('fn: type( var obj boolean strict )', () => {
  //   let chacho = new Boolean(true);
  //   expect(Ofn.type(chacho, true)).toBe('Boolean');
  // });
  // test('fn: type( var obj string strict )', () => {
  //   let chacho = new String('');
  //   expect(Ofn.type(chacho, true)).toBe('String');
  // });
  test('fn: type( var class extend strict )', () => {
    class CustomArray extends Array {}

    let chacho = new CustomArray();
    expect(Ofn.type(chacho, true)).toBe('CustomArray');
  });
});

describe('fn: is(Type)', () => {
  // test('fn: isBoolean()', () => {
  //   expect(Ofn.isBoolean(undefined)).toBe(false);
  // });
  test('fn: isBoolean( bool )', () => {
    expect(Ofn.isBoolean(false)).toBe(true);
  });
  // test('fn: isBoolean( bool )', () => {
  //   expect(Ofn.isBoolean(new Boolean(false))).toBe(false);
  // });

  // test('fn: isNumber()', () => {
  //   expect(Ofn.isNumber(undefined)).toBe(false);
  // });
  test('fn: isNumber( int )', () => {
    expect(Ofn.isNumber(1)).toBe(true);
  });
  test('fn: isNumber( NaN )', () => {
    expect(Ofn.isNumber(Number.NaN)).toBe(true);
  });
  // test('fn: isNumber( number )', () => {
  //   expect(Ofn.isNumber(new Number(1))).toBe(false);
  // });

  // test('fn: isString()', () => {
  //   expect(Ofn.isString(undefined)).toBe(false);
  // });
  test('fn: isString( str )', () => {
    expect(Ofn.isString('1')).toBe(true);
  });
  // test('fn: isString( str )', () => {
  //   expect(Ofn.isString(new String('1'))).toBe(false);
  // });

  // test('fn: isArray()', () => {
  //   expect(Ofn.isArray(undefined)).toBe(false);
  // });
  test('fn: isArray( arr )', () => {
    expect(Ofn.isArray([])).toBe(true);
  });

  // test('fn: isObject()', () => {
  //   expect(Ofn.isObject(undefined)).toBe(false);
  // });
  test('fn: isObject( obj )', () => {
    expect(Ofn.isObject({})).toBe(true);
  });

  // test('fn: isFunction()', () => {
  //   expect(Ofn.isFunction(undefined)).toBe(false);
  // });
  test('fn: isFunction( obj )', () => {
    expect(Ofn.isFunction({})).toBe(false);
  });
  // test('fn: isFunction( fn )', () => {
  //   expect(Ofn.isFunction(function () {})).toBe(true);
  // });
  test('fn: isFunction( fn arrow )', () => {
    expect(Ofn.isFunction(() => {})).toBe(true);
  });

  // test('fn: isRegexp()', () => {
  //   expect(Ofn.isRegexp(undefined)).toBe(false);
  // });
  test('fn: isRegexp( regexp )', () => {
    expect(Ofn.isRegexp(/([A-Z])\w+/)).toBe(true);
  });

  // test('fn: isDate()', () => {
  //   expect(Ofn.isDate(undefined)).toBe(false);
  // });
  test('fn: isDate( date )', () => {
    expect(Ofn.isDate(new Date())).toBe(true);
  });

  // test('fn: isUndefined()', () => {
  //   expect(Ofn.isUndefined(undefined)).toBe(true);
  // });
  test('fn: isUndefined( obj )', () => {
    expect(Ofn.isUndefined({})).toBe(false);
  });

  // test('fn: isNull()', () => {
  //   expect(Ofn.isNull(undefined)).toBe(false);
  // });
  test('fn: isNull( null )', () => {
    expect(Ofn.isNull(null)).toBe(true);
  });
  test('fn: isNull( obj )', () => {
    expect(Ofn.isNull({})).toBe(false);
  });

  // test('fn: isNully()', () => {
  //   expect(Ofn.isNully(undefined)).toBe(true);
  // });
  test('fn: isNully( null )', () => {
    expect(Ofn.isNully(null)).toBe(true);
  });
  test('fn: isNully( obj )', () => {
    expect(Ofn.isNully({})).toBe(false);
  });

  // test('fn: isClass()', () => {
  //   expect(Ofn.isClass(undefined)).toBe(false);
  // });
  test('fn: isClass( null )', () => {
    expect(Ofn.isClass(null)).toBe(false);
  });
  test('fn: isClass( obj )', () => {
    expect(Ofn.isClass({})).toBe(false);
  });
  test('fn: isClass( fn )', () => {
    expect(Ofn.isClass(() => {})).toBe(false);
  });
  test('fn: isClass( class )', () => {
    expect(Ofn.isClass(Ofn)).toBe(true);
  });
});
