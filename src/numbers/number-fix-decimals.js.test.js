import { numberFixDecimals } from './number-fix-decimals';

describe('fn: numberFixDecimals', () => {
  test('fn: numberFixDecimals( undefined )', () => {
    expect(numberFixDecimals()).toBe('');
  });

  test('fn: numberFixDecimals( null )', () => {
    expect(numberFixDecimals(null)).toBe('');
  });

  test('fn: numberFixDecimals( bool )', () => {
    expect(numberFixDecimals(true)).toBe('true');
  });

  test('fn: numberFixDecimals( array )', () => {
    expect(numberFixDecimals([])).toBe('');
  });

  test('fn: numberFixDecimals( object )', () => {
    expect(numberFixDecimals({})).toBe('[object Object]');
  });

  test('fn: numberFixDecimals( fn )', () => {
    expect(numberFixDecimals(() => {})).toBe('() => {}');
  });
});
