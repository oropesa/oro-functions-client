import { isArray, isNumber, isString } from '../general';

// arrayCountByKey( [ { id: 'alpha', category: 'male' }, { id: 'bravo', category: 'female' } ], 'category' );
// -> { 'male': 1, 'female': 1 }

export function arrayCountByKey<T>(
  array: T[],
  key: string,
  strict = false,
): Record<string, number> {
  const result: Record<string, number> = {};

  if (!isArray(array)) {
    return result;
  }

  let objKey = key;
  isNumber(objKey) && (objKey = String(objKey));
  if (!isString(objKey)) {
    return result;
  }

  return array.reduce((result, object) => {
    if (object && (!strict || object[objKey as keyof T])) {
      result[String(object[objKey as keyof T])] = ++result[String(object[objKey as keyof T])] || 1;
    }
    return result;
  }, result);
}
