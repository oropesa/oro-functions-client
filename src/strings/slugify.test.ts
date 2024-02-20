import { slugify } from './slugify';

describe('fn: slugify', () => {
  test('fn: slugify( empty str )', () => {
    expect(slugify('')).toBe('');
  });

  test('fn: slugify( str to empty )', () => {
    expect(slugify('()')).toBe('');
  });

  test('fn: slugify( str )', () => {
    expect(slugify('cha.cho lo_co')).toBe('cha-cho-lo-co');
  });

  test('fn: slugify( str camelCase )', () => {
    expect(slugify('chaCho')).toBe('cha-cho');
  });

  test('fn: slugify( str w nums )', () => {
    expect(slugify('Chacho17')).toBe('chacho17');
  });
});
