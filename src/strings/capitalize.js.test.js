import { capitalize } from './capitalize';

describe('fn: capitalize', () => {
  test('fn: capitalize( undefined )', () => {
    expect(capitalize()).toBe('');
  });

  test('fn: capitalize( null )', () => {
    expect(capitalize(null)).toBe('');
  });

  test('fn: capitalize( bool )', () => {
    expect(capitalize(true)).toBe('');
  });

  test('fn: capitalize( int )', () => {
    expect(capitalize(17)).toBe('17');
  });
});
