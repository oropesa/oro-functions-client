import { escAttr } from '../strings';
import { isObject } from '../general';

// objToStringAttr( { id: 20, name: 'oro' } );
// -> ' id="20" name="oro" '

export function objToStringAttr<T>(obj: T): string {
  if (!isObject(obj)) {
    return '';
  }

  let str = '';
  const keys = Object.keys(obj);
  for (const key of keys) {
    str += ` ${key}="${escAttr(obj[key])}"`;
  }
  return str.length > 0 ? `${str} ` : str;
}
