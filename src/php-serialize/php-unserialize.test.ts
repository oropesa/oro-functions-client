import { phpUnserialize } from './php-unserialize';

describe('fn: phpUnserialize', () => {
  test('fn: phpUnserialize( str )', () => {
    expect(phpUnserialize('chacho')).toBe('chacho');
  });

  test('fn: phpUnserialize( str php )', () => {
    expect(phpUnserialize('a:1:{s:6:"chacho";b:1;}')).toEqual({ chacho: true });
  });

  test('fn: phpUnserialize( str json )', () => {
    expect(phpUnserialize('{"chacho":true}')).toEqual({ chacho: true });
  });

  test('fn: phpUnserialize( str json ) typed', () => {
    expect(phpUnserialize<{ chacho: boolean }>('{"chacho":true}')).toEqual({ chacho: true });
  });

  test('fn: phpUnserialize( str json, strict )', () => {
    expect(phpUnserialize('{"chacho":true}', true)).toBe('{"chacho":true}');
  });
});
