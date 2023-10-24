import { isArray, isObject, isString } from '../general';

export function jsonize<T, B extends boolean = boolean>(
  str: string,
  strict?: B,
): B extends true ? T | null : T | string {
  let strDefault = strict ? null : str;

  if (!isString(str)) {
    return strDefault as B extends true ? null : string;
  }

  let strJson;
  try {
    strJson = JSON.parse(str);
  } catch {
    return strDefault as B extends true ? null : string;
  }

  return isObject(strJson) || isArray(strJson)
    ? (strJson as T)
    : (strDefault as B extends true ? null : string);
}
