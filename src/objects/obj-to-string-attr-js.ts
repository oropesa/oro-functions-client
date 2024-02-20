import { isObject } from '../general';
import { escAttr } from '../strings';

// objToStringAttrJs( { id: 20, name: 'oro' } );
// -> ' id:20;name:oro '

export function objToStringAttrJs<T extends Record<string, any>>(obj: T): string {
  if (!isObject(obj)) {
    return '';
  }

  let str = '';
  const keys = Object.keys(obj);
  for (const key of keys) {
    !!str && (str += ';');
    str += ` ${key}:${escAttr(obj[key])}`;
  }
  return str.length > 0 ? `${str} ` : str;
}
