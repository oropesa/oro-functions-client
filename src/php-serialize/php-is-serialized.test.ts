import { phpIsSerialized } from './php-is-serialized';

describe('fn: phpIsSerialized', () => {
  test('fn: phpIsSerialized( str bad )', () => {
    expect(phpIsSerialized('chacho')).toBe(false);
  });

  test('fn: phpIsSerialized( str json )', () => {
    expect(phpIsSerialized('{"chacho":true}')).toBe(false);
  });

  test('fn: phpIsSerialized( str bad short )', () => {
    expect(phpIsSerialized('i:1')).toBe(false);
  });

  test('fn: phpIsSerialized( str bad type )', () => {
    expect(phpIsSerialized('j:1;')).toBe(false);
  });

  test('fn: phpIsSerialized( str bad ending )', () => {
    expect(phpIsSerialized('i:17')).toBe(false);
  });

  test('fn: phpIsSerialized( str bad ending, no-strict )', () => {
    expect(phpIsSerialized('i:17', false)).toBe(false);
  });

  test('fn: phpIsSerialized( str bad start, no-strict )', () => {
    expect(phpIsSerialized('i:;17', false)).toBe(false);
  });

  test('fn: phpIsSerialized( str bad start array, no-strict )', () => {
    expect(phpIsSerialized('a:1}{b:1;', false)).toBe(false);
  });

  test('fn: phpIsSerialized( str wrong string )', () => {
    expect(phpIsSerialized('s:6:"chacho;')).toBe(false);
  });

  test('fn: phpIsSerialized( str wrong string, no-strict )', () => {
    expect(phpIsSerialized('s:6:chacho;', false)).toBe(false);
  });

  //

  test('fn: phpIsSerialized( str null )', () => {
    expect(phpIsSerialized('N;')).toBe(true);
  });

  test('fn: phpIsSerialized( str string )', () => {
    expect(phpIsSerialized('s:6:"chacho";')).toBe(true);
  });

  test('fn: phpIsSerialized( str string, no-strict )', () => {
    expect(phpIsSerialized('s:6:"chacho";', false)).toBe(true);
  });

  test('fn: phpIsSerialized( str boolean )', () => {
    expect(phpIsSerialized('b:1;')).toBe(true);
  });

  test('fn: phpIsSerialized( str integer )', () => {
    expect(phpIsSerialized('i:17;')).toBe(true);
  });

  test('fn: phpIsSerialized( str float )', () => {
    expect(phpIsSerialized('d:1.7;')).toBe(true);
  });

  test('fn: phpIsSerialized( str float, no-strict )', () => {
    expect(phpIsSerialized('d:1.7;', false)).toBe(true);
  });

  test('fn: phpIsSerialized( str array )', () => {
    expect(phpIsSerialized('a:1:{b:1;}')).toBe(true);
  });
});
