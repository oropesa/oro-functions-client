import { isArray, isNumber, isString, isNully } from '../general';

// arrayValuesByKey( [ { id: 'alpha', name: 'Alpha' }, { id: 'bravo', name: 'Bravo' } ], 'id' );
// -> [ 'alpha', 'bravo' ]

export function arrayValuesByKey<T, V, B extends boolean = false>(
  array: T[],
  key: string,
  strict?: B,
): B extends true ? Array<V> : Array<V | undefined> {
  if (!isArray(array)) {
    return [];
  }

  let objKey = key;
  isNumber(objKey) && (objKey = String(objKey));
  if (!isString(objKey)) {
    return [];
  }

  let values = array.map((obj) => (isNully(obj) ? undefined : (obj[key as keyof T] as V)));
  return strict
    ? (values.filter((element) => element !== undefined) as Array<V>)
    : (values as B extends true ? Array<V> : Array<V | undefined>);
}
