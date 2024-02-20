import { isEven } from './is-even';

describe('fn: isEven', () => {
  test('fn: isEven( undefined )', () => {
    expect(isEven()).toBe(false);
  });

  test('fn: isEven( null )', () => {
    expect(isEven(null)).toBe(false);
  });

  test('fn: isEven( bool )', () => {
    expect(isEven(true)).toBe(false);
  });

  test('fn: isEven( str 0 )', () => {
    expect(isEven('0')).toBe(true);
  });

  test('fn: isEven( str 1 )', () => {
    expect(isEven('1')).toBe(false);
  });
});
