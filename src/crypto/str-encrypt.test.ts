import { strEncrypt } from './str-encrypt';

describe('fn: strEncrypt', () => {
  test('fn: strEncrypt( str )', () => {
    expect(strEncrypt('chacho')).toBe('am13MnRTTDlXZ0QzcnVzR1BxUE5JUT09');
  });

  test('fn: strEncrypt( str, key )', () => {
    expect(strEncrypt('chacho', 'loco')).toBe('NlBSTGRnb3JZSWZlMFEwQUl2R1lwQT09');
  });

  test('fn: strEncrypt( str, key, iv )', () => {
    expect(strEncrypt('chacho', 'loco', 'tio')).toBe('OUhyOFAyeGdQMWExdUFlY253ejczQT09');
  });

  test('fn: strEncrypt( str, key, iv, CTR, Iso97971 )', () => {
    expect(strEncrypt('chacho', 'loco', 'tio', 'CTR', 'Iso97971')).toBe('TWF1eElyY2RlUTNjNnpETnBDSEtndz09');
  });

  test('fn: strEncrypt( str, key, iv, CTRGladman, AnsiX923 )', () => {
    expect(strEncrypt('chacho', 'loco', 'tio', 'CTRGladman', 'AnsiX923')).toBe('dUpja2RObWxjV0hZdi8zTDJaSXBsQT09');
  });

  test('fn: strEncrypt( str, key, iv, OFB, NoPadding )', () => {
    expect(strEncrypt('chacho', 'loco', 'tio', 'OFB', 'NoPadding')).toBe('TWF1eElyY2Q=');
  });

  test('fn: strEncrypt( str, key, iv, ECB, ZeroPadding )', () => {
    expect(strEncrypt('chacho', 'loco', 'tio', 'ECB', 'ZeroPadding')).toBe('dk1KS2FDaXlrWnVKWHpnNmtUQmRMdz09');
  });

  test('fn: strEncrypt( str, key, iv, CBC, Iso10126 )', () => {
    // NOTE: returned string is always different, but their decrypt is valid
    expect(strEncrypt('chacho', 'loco', 'tio', 'CBC', 'Iso10126')).not.toBe('Zng1ckI2VTkrbHVpYTFDNFJ6ZVduQT09');
  });
});
