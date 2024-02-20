import { issetGet } from './isset-get';

describe('fn: issetGet', () => {
  test('fn: issetGet()', () => {
    expect(issetGet()).toBe(undefined);
    expect(issetGet(undefined, 'param')).toBe(undefined);
    expect(issetGet(undefined, 'param', 'test')).toBe('test');
    expect(issetGet(undefined, 'param', 'test', false)).toBe('test');
  });

  test('fn: issetGet( null )', () => {
    expect(issetGet(null)).toBe(undefined);
    expect(issetGet(null, 'param')).toBe(undefined);
    expect(issetGet(null, 'param', 'test')).toBe('test');
    expect(issetGet(null, 'param', 'test', false)).toBe('test');
  });

  test('fn: issetGet( bool )', () => {
    expect(issetGet(true)).toBe(undefined);
    expect(issetGet(true, 'param')).toBe(undefined);
    expect(issetGet(true, 'param', 'test')).toBe('test');
    expect(issetGet(true, 'param', 'test', false)).toBe('test');
  });

  test('fn: issetGet( int )', () => {
    expect(issetGet(1)).toBe(undefined);
    expect(issetGet(1, 'param')).toBe(undefined);
    expect(issetGet(1, 'param', 'test')).toBe('test');
    expect(issetGet(1, 'param', 'test', false)).toBe('test');
  });
});
