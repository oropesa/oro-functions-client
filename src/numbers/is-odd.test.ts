import { isOdd } from './is-odd';

describe('fn: isOdd', () => {
  test('fn: isOdd( NaN )', () => {
    expect(isOdd(Number.NaN)).toBe(false);
  });

  test('fn: isOdd( infinite )', () => {
    expect(isOdd(1 / 0)).toBe(false);
  });

  test('fn: isOdd( int 0 )', () => {
    expect(isOdd(0)).toBe(false);
  });

  test('fn: isOdd( int 1 )', () => {
    expect(isOdd(1)).toBe(true);
  });

  test('fn: isOdd( float 0 )', () => {
    expect(isOdd(0.2)).toBe(false);
  });

  test('fn: isOdd( float 1 )', () => {
    expect(isOdd(1.2)).toBe(true);
  });
});
