import { isArray, isObject, isString } from '../general';
import { arrayize, arrayizeObject, arrayizeString } from './arrayize';

interface CustomArray extends Array<number> {
  total: number;
}

describe('fn: arrayize', () => {
  test('fn: arrayize( str bad )', () => {
    const result = arrayize('chacho');
    expect(result).toBe('chacho');
  });

  test('fn: arrayize( str bad ) typed', () => {
    const result = arrayize<CustomArray>('chacho');
    expect(result).toBe('chacho');
  });

  test('fn: arrayize( str bad, strict )', () => {
    const result = arrayize('chacho', true);
    expect(result).toBe(null);
  });

  test('fn: arrayize( str bad, strict ) typed', () => {
    const result = arrayize<CustomArray>('chacho', true);
    expect(result).toBe(null);
  });

  test('fn: arrayize( str arr )', () => {
    const result = arrayize('[ 1, 2, 3 ]');
    expect(result).toEqual([1, 2, 3]);
  });

  test('fn: arrayize( str arr ) typed', () => {
    const result = arrayize<number[]>('[ 1, 2, 3 ]');
    expect(result).toEqual([1, 2, 3]);
  });

  test('fn: arrayize( str arr-obj )', () => {
    const result = arrayize('{ "0": 1, "1": 2, "2": 3 }');
    expect(result).toEqual([1, 2, 3]);
  });

  test('fn: arrayize( str arr-obj ) typed', () => {
    const result = arrayize<number[]>('{ "0": 1, "1": 2, "2": 3 }');
    expect(result).toEqual([1, 2, 3]);
  });

  test('fn: arrayize( str CustomArray ) typed', () => {
    const result = arrayize<CustomArray>('{ "0": 1, "1": 2, "2": 3, "total": 6 }');

    expect(isArray(result)).toBe(true);
    expect(isString(result)).toBe(false);
    if (isString(result)) {
      return;
    }

    expect(result.total).toBe(6);
    expect([...result]).toEqual([1, 2, 3]);
  });

  //

  test('fn: arrayize( array-obj )', () => {
    const result = arrayize({ '0': 1, '1': 2, '2': 3 });
    expect(result).toEqual([1, 2, 3]);
  });

  test('fn: arrayize( array-obj ) typed', () => {
    const result = arrayize<number[]>({ '0': 1, '1': 2, '2': 3 });
    expect(result).toEqual([1, 2, 3]);
  });

  test('fn: arrayize( array-obj CustomArray ) typed', () => {
    const result = arrayize<CustomArray>({ '0': 1, '1': undefined, '2': 3, total: 6 });

    expect(isArray(result)).toBe(true);
    expect(isObject(result)).toBe(false);
    if (!isArray(result)) {
      return;
    }

    expect((result as CustomArray).total).toBe(6);
    expect([...result]).toEqual([1, undefined, 3]);
  });

  test('fn: arrayize( array-obj CustomArray empty ) typed', () => {
    interface CustomObject {
      total: number;
    }

    const result = arrayize<CustomArray, CustomObject>({ total: 6 });

    expect(isArray(result)).toBe(true);
    expect(isObject(result)).toBe(false);
    if (!isArray(result)) {
      return;
    }

    expect((result as CustomArray).total).toBe(6);
    expect([...result]).toEqual([]);
  });
});

describe('fn: arrayizeString', () => {
  test('fn: arrayizeString( str bad )', () => {
    const result = arrayizeString('chacho');
    expect(result).toBe('chacho');
  });

  test('fn: arrayizeString( str bad ) typed', () => {
    const result = arrayizeString<CustomArray>('chacho');
    expect(result).toBe('chacho');
  });

  test('fn: arrayizeString( str bad, strict )', () => {
    const result = arrayizeString('chacho', true);
    expect(result).toBe(null);
  });

  test('fn: arrayizeString( str bad, strict ) typed', () => {
    const result = arrayizeString<CustomArray>('chacho', true);
    expect(result).toBe(null);
  });

  test('fn: arrayizeString( str arr )', () => {
    const result = arrayizeString('[ 1, 2, 3 ]');
    expect(result).toEqual([1, 2, 3]);
  });

  test('fn: arrayizeString( str arr ) typed', () => {
    const result = arrayizeString<number[]>('[ 1, 2, 3 ]');
    expect(result).toEqual([1, 2, 3]);
  });

  test('fn: arrayizeString( str arr-obj )', () => {
    const result = arrayizeString('{ "0": 1, "1": 2, "2": 3 }');
    expect(result).toEqual([1, 2, 3]);
  });

  test('fn: arrayizeString( str arr-obj ) typed', () => {
    const result = arrayizeString<number[]>('{ "0": 1, "1": 2, "2": 3 }');
    expect(result).toEqual([1, 2, 3]);
  });

  test('fn: arrayizeString( str CustomArray ) typed', () => {
    const result = arrayizeString<CustomArray>('{ "0": 1, "1": 2, "2": 3, "total": 6 }');

    expect(isArray(result)).toBe(true);
    expect(isString(result)).toBe(false);
    if (isString(result)) {
      return;
    }

    expect(result.total).toBe(6);
    expect([...result]).toEqual([1, 2, 3]);
  });
});

describe('fn: arrayizeObject', () => {
  test('fn: arrayizeObject( array-obj )', () => {
    const result = arrayizeObject({ '0': 1, '1': 2, '2': 3 });
    expect(result).toEqual([1, 2, 3]);
  });

  test('fn: arrayizeObject( array-obj ) typed', () => {
    const result = arrayizeObject<number[]>({ '0': 1, '1': 2, '2': 3 });
    expect(result).toEqual([1, 2, 3]);
  });

  test('fn: arrayizeObject( array-obj CustomArray ) typed', () => {
    const result = arrayizeObject<CustomArray>({ '0': 1, '1': undefined, '2': 3, total: 6 });

    expect(isArray(result)).toBe(true);
    expect(isObject(result)).toBe(false);
    if (!isArray(result)) {
      return;
    }

    expect((result as CustomArray).total).toBe(6);
    expect([...result]).toEqual([1, undefined, 3]);
  });

  test('fn: arrayizeObject( array-obj CustomArray empty ) typed', () => {
    interface CustomObject {
      total: number;
    }

    const result = arrayizeObject<CustomArray, CustomObject>({ total: 6 });

    expect(isArray(result)).toBe(true);
    expect(isObject(result)).toBe(false);
    if (!isArray(result)) {
      return;
    }

    expect((result as CustomArray).total).toBe(6);
    expect([...result]).toEqual([]);
  });
});
