import { unserialize } from 'oro-php-locutus';

import { isStringJson, jsonParse } from '../strings';
import { phpIsSerialized } from './php-is-serialized';

export function phpUnserialize<T>(str: string, strict = false): T | string {
  if (!strict && isStringJson(str, true)) {
    return jsonParse<T>(str);
  }

  // don't attempt to unserialize data that wasn't serialized going in
  return phpIsSerialized(str) ? unserialize(str) : str;
}
