import { isArray, isNully, isNumber, isString } from '../general';

// arrayValuesByKey( [ { id: 'alpha', name: 'Alpha' }, { id: 'bravo', name: 'Bravo' } ], 'id' );
// -> [ 'alpha', 'bravo' ]

export function arrayValuesByKey<T extends Record<string, any>, V>(
  array: T[],
  key: keyof T,
  strict?: false,
): Array<V | undefined>;
export function arrayValuesByKey<T extends Record<string, any>, V>(array: T[], key: keyof T, strict: true): Array<V>;
export function arrayValuesByKey<T extends Record<string, any>, V>(
  array: T[],
  key: keyof T,
  strict?: boolean,
): Array<V> | Array<V | undefined> {
  if (!isArray(array) || array.length === 0) {
    return [];
  }

  const objKey = isNumber(key) ? (String(key) as keyof T) : key;
  if (!isString(objKey)) {
    return [];
  }

  const values = array.map((obj) => (isNully(obj) ? undefined : (obj[objKey] as V)));
  return strict ? values.filter((element) => element !== undefined) : values;
}
