import { snakeify } from './snakeify';

describe('fn: snakeify', () => {
  test('fn: snakeify( undefined )', () => {
    expect(snakeify()).toBe('');
  });

  test('fn: snakeify( null )', () => {
    expect(snakeify(null)).toBe('');
  });

  test('fn: snakeify( bool )', () => {
    expect(snakeify(true)).toBe('');
  });

  test('fn: snakeify( int )', () => {
    expect(snakeify(17)).toBe('17');
  });
});
