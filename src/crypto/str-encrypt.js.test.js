import { strEncrypt } from './str-encrypt';

describe('fn: strEncrypt', () => {
  test('fn: strEncrypt( undefined )', () => {
    expect(strEncrypt()).toBe('');
  });

  test('fn: strEncrypt( str, key, iv, def, def )', () => {
    expect(strEncrypt('chacho', 'loco', 'tio', 'loco', 'tio')).toBe('OUhyOFAyeGdQMWExdUFlY253ejczQT09');
  });
});
