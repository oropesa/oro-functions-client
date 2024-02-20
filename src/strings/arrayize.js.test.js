import { arrayize, arrayizeString } from './arrayize';

describe('fn: arrayize', () => {
  test('fn: arrayize( undefined )', () => {
    expect(arrayize()).toBe(undefined);
  });

  test('fn: arrayize( undefined strict )', () => {
    expect(arrayize(undefined, true)).toBe(null);
  });

  test('fn: arrayize( int )', () => {
    expect(arrayize(17)).toBe(17);
  });

  test('fn: arrayize( int strict )', () => {
    expect(arrayize(17, true)).toBe(null);
  });
});

describe('fn: arrayizeString', () => {
  test('fn: arrayizeString( undefined )', () => {
    expect(arrayizeString()).toBe(undefined);
  });

  test('fn: arrayizeString( undefined strict )', () => {
    expect(arrayizeString(undefined, true)).toBe(null);
  });

  test('fn: arrayizeString( int )', () => {
    expect(arrayizeString(17)).toBe(17);
  });

  test('fn: arrayizeString( int strict )', () => {
    expect(arrayizeString(17, true)).toBe(null);
  });

  test('fn: arrayizeString( str bool )', () => {
    expect(arrayizeString('true')).toBe('true');
  });

  test('fn: arrayizeString( str bool strict )', () => {
    expect(arrayizeString('true', true)).toBe(null);
  });
});
