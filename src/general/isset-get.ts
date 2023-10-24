import { isNully } from './is-nully';

// issetGet( myObject, 'category', 'artist' );

export function issetGet<
  T,
  O extends Record<string | number, any>,
  K extends string | number = string,
>(obj: O, key: K, def?: T, allowFalsy = true): T | null {
  const defaultValue = def ?? null;
  if (isNully(obj) || obj[key] === undefined) {
    return defaultValue;
  }

  return !allowFalsy && !obj[key] ? defaultValue : obj[key];
}
