import { isObject } from '../general';

// objToStringSqlSet( { id: 20, name: "'oro'", today: 'NOW()' } );
// -> " id = 20, name = 'oro', today = NOW() "

export function objToStringSqlSet<T extends Record<string, any>>(obj: T): string {
  if (!isObject(obj)) {
    return '';
  }

  let str = '';
  const keys = Object.keys(obj);
  for (const key of keys) {
    !!str && (str += ',');
    str += ` ${key} = ${obj[key]}`;
  }
  return str.length > 0 ? `${str} ` : str;
}
