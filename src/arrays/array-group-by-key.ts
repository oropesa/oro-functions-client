import { isArray, isNumber, isString } from '../general';

// arrayGroupByKey( [ { id: 'alpha', category: 'male' }, { id: 'bravo', category: 'female' } ], 'category' );
// -> { 'male': [ { id: 'alpha', category: 'male' } ], 'female': [ { id: 'bravo', category: 'female' } ] }

export function arrayGroupByKey<T extends Record<string, any>>(
  array: T[],
  key: keyof T,
  strict = false,
): Record<string, T[]> {
  const result: Record<string, T[]> = {};

  if (!isArray(array) || array.length === 0) {
    return result;
  }

  const objKey = isNumber(key) ? (String(key) as keyof T) : key;
  if (!isString(objKey)) {
    return result;
  }

  return array.reduce((result, item) => {
    if (item && (!strict || item[objKey])) {
      const key = String(item[objKey]);
      if (!result[key]) {
        result[key] = [];
      }

      result[key].push(item);
    }

    return result;
  }, result);
}
