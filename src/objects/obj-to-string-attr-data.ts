import { isObject } from '../general';
import { escAttr } from '../strings';

// objToStringAttrData( { id: 20, name: 'oro' } );
// -> ' data-id="20" data-name="oro" '

export function objToStringAttrData<T extends Record<string, any>>(obj: T): string {
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
