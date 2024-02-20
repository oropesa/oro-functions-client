import { jsonize } from './jsonize';

describe('fn: jsonize', () => {
  test('fn: jsonize( str bad )', () => {
    expect(jsonize('chacho')).toBe('chacho');
  });

  test('fn: jsonize( str not obj )', () => {
    expect(jsonize('true')).toBe('true');
  });

  test('fn: jsonize( str bad, strict )', () => {
    expect(jsonize('chacho', true)).toBe(null);
  });

  test('fn: jsonize( str obj )', () => {
    expect(jsonize('{ "chacho": true }')).toEqual({ chacho: true });
  });

  test('fn: jsonize( str obj ) typed', () => {
    expect(jsonize<{ chacho: number }>('{ "chacho": 7 }')).toEqual({ chacho: 7 });
  });

  test('fn: jsonize( str arr )', () => {
    expect(jsonize('[ 1, 2, 3 ]')).toEqual([1, 2, 3]);
  });

  test('fn: jsonize( str arr ) typed', () => {
    expect(jsonize<number[]>('[ 1, 2, 3 ]')).toEqual([1, 2, 3]);
  });

  test('fn: jsonize( str arr(obj) )', () => {
    expect(jsonize('{ "0": 1, "1": 2, "2": 3 }')).toEqual({ '0': 1, '1': 2, '2': 3 });
  });
});
