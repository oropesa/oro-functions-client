import { type } from './type';

describe('fn: type', () => {
  test('fn: type( null )', () => {
    expect(type(null)).toBe('null');
  });

  test('fn: type( bool )', () => {
    expect(type(true)).toBe('boolean');
  });

  test('fn: type( int )', () => {
    expect(type(1)).toBe('number');
  });

  test('fn: type( float )', () => {
    expect(type(1.2)).toBe('number');
  });

  test('fn: type( NaN )', () => {
    expect(type(Number.NaN)).toBe('number');
  });

  test('fn: type( infinite )', () => {
    expect(type(1 / 0)).toBe('number');
  });

  test('fn: type( str )', () => {
    expect(type('')).toBe('string');
  });

  test('fn: type( arr )', () => {
    expect(type([])).toBe('array');
  });

  test('fn: type( obj )', () => {
    expect(type({})).toBe('object');
  });

  test('fn: type( date )', () => {
    expect(type(new Date())).toBe('date');
  });

  test('fn: type( function )', () => {
    expect(type(() => {})).toBe('function');
  });

  test('fn: type( regexp )', () => {
    expect(type(/([A-Z])\w+/)).toBe('regexp');
  });

  test('fn: type( class )', () => {
    class Custom {}

    expect(type(Custom)).toBe('class');
  });

  test('fn: type( class strict )', () => {
    class Custom {}

    expect(type(Custom, true)).toBe('class');
  });

  test('fn: type( var function )', () => {
    const chacho = () => {};
    expect(type(chacho)).toBe('function');
  });

  test('fn: type( var obj class )', () => {
    class Custom {}
    const chacho = new Custom();
    expect(type(chacho)).toBe('object');
  });

  test('fn: type( var obj class strict )', () => {
    class Custom {}
    const chacho = new Custom();
    expect(type(chacho, true)).toBe('Custom');
  });

  test('fn: type( var function strict )', () => {
    const chacho = () => {};
    expect(type(chacho, true)).toBe('function');
  });

  test('fn: type( var number strict )', () => {
    const chacho = 5;
    expect(type(chacho, true)).toBe('number');
  });

  test('fn: type( var class extend strict )', () => {
    class CustomArray extends Array {}

    const chacho = new CustomArray();
    expect(type(chacho, true)).toBe('CustomArray');
  });
});
