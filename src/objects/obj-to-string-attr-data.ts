import { escAttr } from '../strings';
import { isObject } from '../general';

// objToStringAttrData( { id: 20, name: 'oro' } );
// -> ' data-id="20" data-name="oro" '

export function objToStringAttrData<T>(obj: T): string {
  if (!isObject(obj)) {
    return '';
  }

  let str = '';
  const keys = Object.keys(obj);
  for (const key of keys) {
    str += ` data-${key}="${escAttr(obj[key])}"`;
  }
  return str.length > 0 ? `${str} ` : str;
}
