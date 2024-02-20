import { objGetMethods } from './obj-get-methods';

describe('fn: objGetMethods', () => {
  test('fn: objGetMethods( class empty )', () => {
    class Chacho {}

    expect(objGetMethods(new Chacho())).toEqual([]);
  });

  test('fn: objGetMethods( class )', () => {
    class Chacho {
      public static tio() {}
      public fleje = true;
      public loco() {}
    }

    expect(objGetMethods(new Chacho())).toEqual(['loco']);
  });

  test('fn: objGetMethods( obj arr )', () => {
    class Chacho extends Array {
      public static tio() {}
      public fleje = true;
      public loco() {}
    }

    expect(objGetMethods(new Chacho())).toEqual(['loco']);
  });

  test('fn: objGetMethods( obj arr, allowDefaults )', () => {
    expect(objGetMethods([], true).includes('toString')).toBe(true);
  });

  test('fn: objGetMethods( obj )', () => {
    expect(objGetMethods({})).toEqual([]);
  });

  test('fn: objGetMethods( obj, allowDefaults )', () => {
    expect(objGetMethods({}, true).includes('toString')).toBe(true);
  });
});
