import { isNully } from './is-nully';

// issetGet( myObject, 'category', 'artist' ); -> myObject['category'] | 'artist'

export function issetGet<
  T,
  O extends Record<string | number, any> = Record<string | number, any>,
  K extends string | number = string | number,
>(obj: O, key: K): T | undefined;
export function issetGet<
  T,
  O extends Record<string | number, any> = Record<string | number, any>,
  K extends string | number = string | number,
>(obj: O, key: K, def: T, allowFalsy?: boolean): T;

//

export function issetGet<
  T,
  O extends Record<string | number, any> = Record<string | number, any>,
  K extends string | number = string | number,
>(obj: O, key: K, def?: T, allowFalsy = true): T | undefined {
  const defaultValue = def ?? undefined;
  if (isNully(obj) || obj[key] === undefined) {
    return defaultValue;
  }

  return !allowFalsy && !obj[key] ? defaultValue : obj[key];
}
