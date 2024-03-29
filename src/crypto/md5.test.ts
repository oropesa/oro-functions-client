import { md5 } from './md5';

describe('fn: md5', () => {
  test('fn: md5( str empty )', () => {
    expect(md5('')).toBe('d41d8cd98f00b204e9800998ecf8427e');
  });

  test('fn: md5( str )', () => {
    expect(md5('chacho')).toBe('496c84fb22e82d68fad9e5fe8e89d03d');
  });
});
