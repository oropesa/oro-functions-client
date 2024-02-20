import { strDecrypt } from './str-decrypt';

describe('fn: strDecrypt', () => {
  test('fn: strDecrypt( str )', () => {
    expect(strDecrypt('am13MnRTTDlXZ0QzcnVzR1BxUE5JUT09')).toBe('chacho');
  });

  test('fn: strDecrypt( str, key )', () => {
    expect(strDecrypt('NlBSTGRnb3JZSWZlMFEwQUl2R1lwQT09', 'loco')).toBe('chacho');
  });

  test('fn: strDecrypt( str, key, iv )', () => {
    expect(strDecrypt('OUhyOFAyeGdQMWExdUFlY253ejczQT09', 'loco', 'tio')).toBe('chacho');
  });

  test('fn: strDecrypt( str, key, iv, CTR, Iso97971 )', () => {
    expect(strDecrypt('TWF1eElyY2RlUTNjNnpETnBDSEtndz09', 'loco', 'tio', 'CTR', 'Iso97971')).toBe('chacho');
  });

  test('fn: strDecrypt( str, key, iv, CTRGladman, AnsiX923 )', () => {
    expect(strDecrypt('dUpja2RObWxjV0hZdi8zTDJaSXBsQT09', 'loco', 'tio', 'CTRGladman', 'AnsiX923')).toBe('chacho');
  });

  test('fn: strDecrypt( str, key, iv, OFB, NoPadding )', () => {
    expect(strDecrypt('TWF1eElyY2Q=', 'loco', 'tio', 'OFB', 'NoPadding')).toBe('chacho');
  });

  test('fn: strDecrypt( str, key, iv, ECB, ZeroPadding )', () => {
    expect(strDecrypt('dk1KS2FDaXlrWnVKWHpnNmtUQmRMdz09', 'loco', 'tio', 'ECB', 'ZeroPadding')).toBe('chacho');
  });

  test('fn: strDecrypt( str, key, iv, CBC, Iso10126 )', () => {
    expect(strDecrypt('Zng1ckI2VTkrbHVpYTFDNFJ6ZVduQT09', 'loco', 'tio', 'CBC', 'Iso10126')).toBe('chacho');
  });
});
