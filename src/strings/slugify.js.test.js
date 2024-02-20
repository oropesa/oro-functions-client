import { slugify } from './slugify';

describe('fn: slugify', () => {
  test('fn: slugify( undefined )', () => {
    expect(slugify()).toBe('');
  });

  test('fn: slugify( null )', () => {
    expect(slugify(null)).toBe('');
  });

  test('fn: slugify( bool )', () => {
    expect(slugify(true)).toBe('');
  });

  test('fn: slugify( int )', () => {
    expect(slugify(17)).toBe('17');
  });
});
