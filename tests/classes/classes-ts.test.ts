import Ofn from '../../dist';

class ODummy {
  public static varStatic1 = '';
  public static varStatic2 = '';

  public static fnStatic1() {}
  public static fnStatic2() {}

  public varStatic1 = '';
  public varStatic2 = '';

  public fn1() {}
  public fn2() {}
}

describe('fn: getClassName', () => {
  // test('fn: getClassName( undefined )', () => {
  //   expect(Ofn.getClassName(undefined)).toBe('');
  // });
  test('fn: getClassName( class )', () => {
    expect(Ofn.getClassName(ODummy)).toBe('ODummy');
  });
  test('fn: getClassName( class var )', () => {
    const Example = ODummy;
    expect(Ofn.getClassName(Example)).toBe('ODummy');
  });
});

describe('fn: getClassMethods', () => {
  // test('fn: getClassMethods( undefined )', () => {
  //   expect(Ofn.getClassMethods(undefined)).toEqual([]);
  // });
  test('fn: getClassMethods( class )', () => {
    expect(Ofn.getClassMethods(ODummy)).toEqual(['fn1', 'fn2']);
  });
});

describe('fn: getClassStaticMethods', () => {
  // test('fn: getClassStaticMethods( undefined )', () => {
  //   expect(Ofn.getClassStaticMethods(undefined)).toEqual([]);
  // });
  test('fn: getClassStaticMethods( class )', () => {
    expect(Ofn.getClassStaticMethods(ODummy)).toEqual(['fnStatic1', 'fnStatic2']);
  });
});
