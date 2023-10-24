import Ofn from '../../dist';

describe('fn: md5', () => {
  // test('fn: md5( undefined )', () => {
  //   expect(Ofn.md5(undefined)).toBe('');
  // });
  // test('fn: md5( null )', () => {
  //   expect(Ofn.md5(null)).toBe('');
  // });
  test('fn: md5( str empty )', () => {
    expect(Ofn.md5('')).toBe('d41d8cd98f00b204e9800998ecf8427e');
  });
  test('fn: md5( str )', () => {
    expect(Ofn.md5('chacho')).toBe('496c84fb22e82d68fad9e5fe8e89d03d');
  });
});

describe('fn: strEncrypt', () => {
  // test('fn: strEncrypt( undefined )', () => {
  //   expect(Ofn.strEncrypt(undefined)).toBe('');
  // });
  test('fn: strEncrypt( str )', () => {
    expect(Ofn.strEncrypt('chacho')).toBe('am13MnRTTDlXZ0QzcnVzR1BxUE5JUT09');
  });
  test('fn: strEncrypt( str, key )', () => {
    expect(Ofn.strEncrypt('chacho', 'loco')).toBe('NlBSTGRnb3JZSWZlMFEwQUl2R1lwQT09');
  });
  test('fn: strEncrypt( str, key, iv )', () => {
    expect(Ofn.strEncrypt('chacho', 'loco', 'tio')).toBe('OUhyOFAyeGdQMWExdUFlY253ejczQT09');
  });
});

describe('fn: strDecrypt', () => {
  // test('fn: strDecrypt( undefined )', () => {
  //   expect(Ofn.strDecrypt(undefined)).toBe('');
  // });
  test('fn: strDecrypt( str )', () => {
    expect(Ofn.strDecrypt('am13MnRTTDlXZ0QzcnVzR1BxUE5JUT09')).toBe('chacho');
  });
  test('fn: strDecrypt( str, key )', () => {
    expect(Ofn.strDecrypt('NlBSTGRnb3JZSWZlMFEwQUl2R1lwQT09', 'loco')).toBe('chacho');
  });
  test('fn: strDecrypt( str, key, iv )', () => {
    expect(Ofn.strDecrypt('OUhyOFAyeGdQMWExdUFlY253ejczQT09', 'loco', 'tio')).toBe('chacho');
  });
});
