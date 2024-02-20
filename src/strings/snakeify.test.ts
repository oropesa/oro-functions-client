import { snakeify } from './snakeify';

describe('fn: snakeify', () => {
  test('fn: slugify( empty str )', () => {
    expect(snakeify('')).toBe('');
  });

  test('fn: slugify( str to empty )', () => {
    expect(snakeify('()')).toBe('');
  });

  test('fn: snakeify( str )', () => {
    expect(snakeify('cha.cho lo_co')).toBe('cha_cho_lo_co');
  });

  test('fn: snakeify( str camelCase )', () => {
    expect(snakeify('chaCho')).toBe('cha_cho');
  });

  test('fn: snakeify( str w nums )', () => {
    expect(snakeify('Chacho17')).toBe('chacho17');
  });
});
