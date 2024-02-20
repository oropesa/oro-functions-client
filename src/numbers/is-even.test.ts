import { isEven } from './is-even';

describe('fn: isEven', () => {
  test('fn: isEven( NaN )', () => {
    expect(isEven(Number.NaN)).toBe(false);
  });

  test('fn: isEven( infinite )', () => {
    expect(isEven(1 / 0)).toBe(false);
  });

  test('fn: isEven( int 0 )', () => {
    expect(isEven(0)).toBe(true);
  });

  test('fn: isEven( int 1 )', () => {
    expect(isEven(1)).toBe(false);
  });

  test('fn: isEven( float 0 )', () => {
    expect(isEven(0.2)).toBe(true);
  });

  test('fn: isEven( float 1 )', () => {
    expect(isEven(1.2)).toBe(false);
  });
});
