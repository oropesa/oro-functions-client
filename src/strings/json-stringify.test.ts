import { jsonStringify } from './json-stringify';

describe('fn: jsonStringify', () => {
  test('fn: jsonStringify( obj )', () => {
    expect(jsonStringify({ chacho: true })).toBe('{"chacho":true}');
  });

  test('fn: jsonStringify( obj ) typed', () => {
    expect(jsonStringify<{ chacho: number }>({ chacho: 7 })).toBe('{"chacho":7}');
  });

  test('fn: jsonStringify( obj ) beauty', () => {
    expect(jsonStringify({ chacho: true }, true)).toBe(`{\n  "chacho": true\n}`);
  });

  test('fn: jsonStringify( arr )', () => {
    expect(jsonStringify([1, 2, 3])).toBe('{"0":1,"1":2,"2":3}');
  });

  test('fn: jsonStringify( arr ) typed', () => {
    expect(jsonStringify<number[]>([1, 2, 3])).toBe('{"0":1,"1":2,"2":3}');
  });
});
