import { type } from './type';

describe('fn: type', () => {
  test('fn: type( undefined )', () => {
    expect(type()).toBe('undefined');
  });

  test('fn: type( boolean )', () => {
    expect(type(new Boolean(true))).toBe('boolean');
  });

  test('fn: type( number )', () => {
    expect(type(new Number(1))).toBe('number');
  });

  test('fn: type( string )', () => {
    expect(type(new String(''))).toBe('string');
  });

  test('fn: type( var obj number strict )', () => {
    const chacho = new Number(5);
    expect(type(chacho, true)).toBe('Number');
  });

  test('fn: type( var obj boolean strict )', () => {
    const chacho = new Boolean(true);
    expect(type(chacho, true)).toBe('Boolean');
  });

  test('fn: type( var obj string strict )', () => {
    const chacho = new String('');
    expect(type(chacho, true)).toBe('String');
  });
});
