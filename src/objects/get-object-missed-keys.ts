import { type, isArray } from '../general';

export function getObjectMissedKeys<T extends Record<string, any>, K = string>(
  obj: T,
  keys: K[],
): Omit<K[], keyof T> {
  if (!['object', 'array'].includes(type(obj))) {
    return [];
  }
  if (!isArray(keys) || keys.length === 0) {
    return [];
  }

  const objKeys = Object.keys(obj);
  return keys.filter((k) => !objKeys.includes(String(k)));
}
