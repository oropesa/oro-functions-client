import { strDecrypt } from './str-decrypt';

describe('fn: strDecrypt', () => {
  test('fn: strDecrypt( undefined )', () => {
    expect(strDecrypt()).toBe('');
  });

  test('fn: strDecrypt( str, key, iv, def, def )', () => {
    expect(strDecrypt('OUhyOFAyeGdQMWExdUFlY253ejczQT09', 'loco', 'tio', 'loco', 'tio')).toBe('chacho');
  });
});
