import { capitalize } from './capitalize';

describe('fn: capitalize', () => {
  test('fn: capitalize( str )', () => {
    expect(capitalize('chacho')).toBe('Chacho');
  });

  test('fn: capitalize( str2 )', () => {
    expect(capitalize('chaCho')).toBe('ChaCho');
  });
});
