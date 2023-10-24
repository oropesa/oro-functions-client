import { isArray } from '../general';
import { isObject } from '../general';
import { jsonStringify } from '../strings';
import { serialize } from 'oro-php-locutus';

export function phpSerialize<T>(mixedValue: T, strict = false): string | T {
  if (!isArray(mixedValue) && !isObject(mixedValue)) {
    return mixedValue;
  }

  return strict ? serialize(mixedValue) : jsonStringify(mixedValue, false);
}
