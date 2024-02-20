import { isArray, isObject } from '../general';

export function jsonStringify<T extends Record<string | number, any>>(json: T, beautify = false): string {
  if (!isObject(json) && !isArray(json)) {
    return '';
  }

  return beautify ? JSON.stringify({ ...json }, null, 2) : JSON.stringify({ ...json });
}
