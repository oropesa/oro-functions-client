import { phpSerialize } from './php-serialize';

describe('fn: phpSerialize', () => {
  test('fn: phpSerialize( boolean )', () => {
    expect(phpSerialize<boolean>(true)).toBe(true);
  });

  test('fn: phpSerialize( str )', () => {
    expect(phpSerialize('chacho')).toBe('chacho');
  });

  test('fn: phpSerialize( obj )', () => {
    expect(phpSerialize({ chacho: true })).toBe('{"chacho":true}');
  });

  test('fn: phpSerialize( obj, strict )', () => {
    expect(phpSerialize({ chacho: true }, true)).toBe('a:1:{s:6:"chacho";b:1;}');
  });
});
