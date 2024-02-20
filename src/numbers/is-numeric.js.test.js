import { isNumeric } from './is-numeric';

describe('fn: isNumeric', () => {
  test('fn: isNumeric( undefined )', () => {
    expect(isNumeric()).toBe(false);
  });

  test('fn: isNumeric( null )', () => {
    expect(isNumeric(null)).toBe(false);
  });

  test('fn: isNumeric( bool )', () => {
    expect(isNumeric(true)).toBe(false);
  });
});
