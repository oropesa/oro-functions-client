import { trimAll } from './trim-all';

describe('fn: trimAll', () => {
  test('fn: trimAll( undefined )', () => {
    expect(trimAll()).toBe('');
  });

  test('fn: trimAll( null )', () => {
    expect(trimAll(null)).toBe('');
  });

  test('fn: trimAll( bool )', () => {
    expect(trimAll(true)).toBe('');
  });

  test('fn: trimAll( int )', () => {
    expect(trimAll(17)).toBe('17');
  });
});
