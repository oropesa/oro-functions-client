import { isArray, isObject, isString } from '../general';

export function jsonize<T>(str: string, strict?: false): T | string;
export function jsonize<T>(str: string, strict: true): T | null;
export function jsonize<T>(str: string, strict?: boolean): T | null | string {
  const strDefault = strict ? null : str;

  if (!isString(str)) {
    return strDefault;
  }

  let strJson;
  try {
    strJson = JSON.parse(str);
  } catch {
    return strDefault;
  }

  return isObject(strJson) || isArray(strJson) ? (strJson as T) : strDefault;
}
