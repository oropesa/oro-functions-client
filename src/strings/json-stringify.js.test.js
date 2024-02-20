import { jsonStringify } from './json-stringify';

describe('fn: jsonStringify', () => {
  test('fn: jsonStringify( undefined )', () => {
    expect(jsonStringify()).toBe('');
  });

  test('fn: jsonStringify( str )', () => {
    expect(jsonStringify('chacho')).toBe('');
  });

  test('fn: jsonStringify( obj )', () => {
    expect(jsonStringify({ chacho: 7 })).toBe('{"chacho":7}');
  });
});
