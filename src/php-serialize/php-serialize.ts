import { serialize } from 'oro-php-locutus';

import { isArray, isObject } from '../general';
import { jsonStringify } from '../strings';

export function phpSerialize<T>(mixedValue: T, strict = false): string | T {
  if (!isArray(mixedValue) && !isObject(mixedValue)) {
    return mixedValue;
  }

  return strict ? serialize(mixedValue) : jsonStringify(mixedValue, false);
}
