import { isArray, isNully, isNumber, isString } from '../general';

// arrayToObjectByKey( [ { id: 'alpha', name: 'Alpha' }, { id: 'bravo', name: 'Bravo' } ], 'id' );
// -> { 'alpha': { id: 'alpha', name: 'Alpha' }, 'bravo': { id: 'bravo', name: 'Bravo' }

export function arrayToObjectByKey<T extends Record<string, any>>(
  array: T[],
  key: keyof T,
  strict = false,
): Record<string, T> {
  const result: Record<string, T> = {};

  if (!isArray(array) || array.length === 0) {
    return result;
  }

  const objKey = isNumber(key) ? (String(key) as keyof T) : key;
  if (!isString(objKey)) {
    return result;
  }

  return array.reduce((obj, item) => {
    if (!isNully(item) && (!strict || item[objKey] !== undefined)) {
      obj[String(item[objKey])] = item;
    }

    return obj;
  }, result);
}
