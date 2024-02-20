import { md5 } from './md5';

describe('fn: md5', () => {
  test('fn: md5( undefined )', () => {
    expect(md5()).toBe('');
  });

  test('fn: md5( null )', () => {
    expect(md5(null)).toBe('');
  });
});
