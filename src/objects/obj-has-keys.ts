import { isArray, type } from '../general';

export function objHasKeys<T extends Record<string, any>, K = string>(obj: T, keys: K[]): boolean {
  if (!['object', 'array'].includes(type(obj))) {
    return false;
  }
  if (!isArray(keys) || keys.length === 0) {
    return false;
  }

  const objKeys = Object.keys(obj);
  return keys.every((k) => objKeys.includes(String(k)));
}
