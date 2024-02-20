import { isNumberic, isNumeric } from './is-numeric';

describe('fn: isNumberic', () => {
  test('fn: isNumberic( NaN )', () => {
    expect(isNumberic(Number.NaN)).toBe(false);
  });
});

describe('fn: isNumeric', () => {
  test('fn: isNumeric( NaN )', () => {
    expect(isNumeric(Number.NaN)).toBe(false);
  });

  test('fn: isNumeric( infinite )', () => {
    expect(isNumeric(1 / 0)).toBe(false);
  });

  test('fn: isNumeric( int 0 )', () => {
    expect(isNumeric(0)).toBe(true);
  });

  test('fn: isNumeric( int 1 )', () => {
    expect(isNumeric(1)).toBe(true);
  });

  test('fn: isNumeric( float 0 )', () => {
    expect(isNumeric(0.2)).toBe(true);
  });

  test('fn: isNumeric( float 1 )', () => {
    expect(isNumeric(1.2)).toBe(true);
  });

  test('fn: isNumeric( str 0 )', () => {
    expect(isNumeric('0')).toBe(true);
  });

  test('fn: isNumeric( str 1 )', () => {
    expect(isNumeric('1')).toBe(true);
  });

  test('fn: isNumberic( str 1 )', () => {
    expect(isNumeric('1')).toBe(true);
  });
});
