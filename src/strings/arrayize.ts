import { isArray, isObject, isString } from '../general';

export function arrayize<T extends Record<number | string, any>>(str: string, strict?: false): T | string;
export function arrayize<T extends Record<number | string, any>>(str: string, strict: true): T | null;
export function arrayize<T extends Record<number | string, any>, O extends Record<string, any> = Record<string, any>>(
  object: O,
  strict?: false,
): T | O;
export function arrayize<T extends Record<number | string, any>, O extends Record<string, any> = Record<string, any>>(
  object: O,
  strict: true,
): T | null;
export function arrayize<T extends Record<number | string, any>, O extends Record<string, any> = Record<string, any>>(
  strOrObject: string | O,
  strict?: boolean,
): T | null | string | O {
  if (isString(strOrObject)) {
    return strict ? arrayizeString<T>(strOrObject, strict) : arrayizeString<T>(strOrObject, strict);
  }

  return strict ? arrayizeObject<T, O>(strOrObject, strict) : arrayizeObject<T, O>(strOrObject, strict);
}

export function arrayizeString<T extends Record<number | string, any>>(str: string, strict?: false): T | string;
export function arrayizeString<T extends Record<number | string, any>>(str: string, strict: true): T | null;
export function arrayizeString<T extends Record<number | string, any>>(
  str: string,
  strict?: boolean,
): T | null | string {
  const strDefault = strict ? null : str;

  if (!isString(str)) {
    return strDefault;
  }

  let json;
  try {
    json = JSON.parse(str);
  } catch {
    return strDefault;
  }

  if (!isObject(json) && !isArray(json)) {
    return strDefault;
  }

  const array: Record<number | string, any> = [];

  for (const key of Object.keys(json)) {
    array[key] = (json as Record<string, any>)[key];
  }

  return array as T;
}

export function arrayizeObject<
  T extends Record<number | string, any>,
  O extends Record<string, any> = Record<string, any>,
>(object: O, strict?: false): T | O;
export function arrayizeObject<
  T extends Record<number | string, any>,
  O extends Record<string, any> = Record<string, any>,
>(object: O, strict: true): T | null;
export function arrayizeObject<
  T extends Record<number | string, any>,
  O extends Record<string, any> = Record<string, any>,
>(object: O, strict?: boolean): T | null | O {
  const objDefault = strict ? null : object;

  if (!isObject(object) && !isArray(object)) {
    return objDefault;
  }

  const array: Record<number | string, any> = [];

  for (const key of Object.keys(object)) {
    array[key] = object[key];
  }

  return array as T;
}
