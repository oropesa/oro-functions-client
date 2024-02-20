import { isArray, isNumber, isString } from '../general';

// arrayCountByKey( [ { id: 'alpha', category: 'male' }, { id: 'bravo', category: 'female' } ], 'category' );
// -> { 'male': 1, 'female': 1 }

export function arrayCountByKey<T extends Record<string, any>>(
  array: T[],
  key: keyof T,
  strict = false,
): Record<string, number> {
  const result: Record<string, number> = {};

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
      result[key] = ++result[key] || 1;
    }
    return result;
  }, result);
}
