import { jsonParse } from './json-parse';

describe('fn: jsonParse', () => {
  test('fn: jsonParse( str bad )', () => {
    expect(jsonParse('chacho')).toBe('chacho');
  });

  test('fn: jsonParse( str bad, strict )', () => {
    expect(jsonParse('chacho', true)).toBe(null);
  });

  test('fn: jsonParse( str obj )', () => {
    expect(jsonParse('{ "chacho": true }')).toEqual({ chacho: true });
  });

  test('fn: jsonParse( str obj ) typed', () => {
    expect(jsonParse<{ chacho: number }>('{ "chacho": 7 }')).toEqual({ chacho: 7 });
  });

  test('fn: jsonParse( str obj beauty )', () => {
    expect(jsonParse(`{\n  "chacho": true\n}`)).toEqual({ chacho: true });
  });

  test('fn: jsonParse( str arr )', () => {
    expect(jsonParse('[ 1, 2, 3 ]')).toEqual([1, 2, 3]);
  });

  test('fn: jsonParse( str arr(obj) )', () => {
    expect(jsonParse('{ "0": 1, "1": 2, "2": 3 }')).toEqual([1, 2, 3]);
  });

  test('fn: jsonParse( str arr(obj) ) typed', () => {
    expect(jsonParse<number[]>('{ "0": 1, "1": 2, "2": 3 }')).toEqual([1, 2, 3]);
  });

  test('fn: jsonParse( str arr, strict )', () => {
    expect(jsonParse('{ "0": 1, "1": 2, "2": 3 }', true)).toEqual({ '0': 1, '1': 2, '2': 3 });
  });
});
