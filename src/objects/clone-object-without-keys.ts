import { isNumeric } from '../numbers';
import { type, isArray } from '../general';
import { cloneObject } from './clone-object';

// cloneObjectWithoutKeys( { a: '1', b: '2', c: '3' }, ['a', 'b'] );
// -> { c: '3' }

export function cloneObjectWithoutKeys<T, K extends keyof T>(
  obj: T,
  keys: K[],
): Partial<Omit<T, K>> {
  const objDefault: Partial<Omit<T, K>> = {};

  if (!['object', 'array'].includes(type(obj))) {
    return objDefault;
  }
  if (!isArray(keys) || keys.length === 0) {
    return objDefault;
  }

  return cloneObject(
    Object.keys(obj || {})
      .filter((k) => {
        return isNumeric(k)
          ? !keys.includes(k as K) && !keys.includes(Number(k) as K)
          : !keys.includes(k as K);
      })
      .reduce((o, k) => Object.assign(o, { [k]: obj[k as K] }), objDefault),
  );
}
