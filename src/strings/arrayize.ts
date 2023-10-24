import { isArray, isObject, isString } from '../general';

export function arrayize<
  T,
  B extends boolean = boolean,
  O extends Record<string, any> = Record<string, any>,
>(strOrObject: string | O, strict?: B): B extends true ? T | null : T | string | O {
  return isString(strOrObject)
    ? arrayizeString<T, B>(strOrObject, strict)
    : arrayizeObject<T, O, B>(strOrObject, strict);
}

export function arrayizeString<T, B extends boolean = boolean>(
  str: string,
  strict?: B,
): B extends true ? T | null : T | string {
  let strDefault = strict ? null : str;

  if (!isString(str)) {
    return strDefault as B extends true ? null : string;
  }

  let json;
  try {
    json = JSON.parse(str);
  } catch {
    return strDefault as B extends true ? null : string;
  }

  if (!isObject(json) && !isArray(json)) {
    return strDefault as B extends true ? null : string;
  }

  let array: any[] = [];

  for (const key of Object.keys(json)) {
    // @ts-ignore
    array[key] = json[key];
  }

  return array as T;
}

export function arrayizeObject<
  T,
  O extends Record<string, any> = Record<string, any>,
  B extends boolean = boolean,
>(object: O, strict?: B): B extends true ? T | null : T | O {
  let objDefault = strict ? null : object;

  if (!isObject(object) && !isArray(object)) {
    return objDefault as B extends true ? null : O;
  }

  let array: any[] = [];

  for (const key of Object.keys(object)) {
    // @ts-ignore
    array[key] = object[key];
  }

  return array as T;
}
