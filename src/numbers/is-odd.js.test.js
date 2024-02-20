import { isOdd } from './is-odd';

describe('fn: isOdd', () => {
  test('fn: isOdd( undefined )', () => {
    expect(isOdd()).toBe(false);
  });

  test('fn: isOdd( null )', () => {
    expect(isOdd(null)).toBe(false);
  });

  test('fn: isOdd( bool )', () => {
    expect(isOdd(true)).toBe(false);
  });

  test('fn: isOdd( str 0 )', () => {
    expect(isOdd('0')).toBe(false);
  });

  test('fn: isOdd( str 1 )', () => {
    expect(isOdd('1')).toBe(true);
  });
});
