import { type } from '../general';
import cloneDeep from 'lodash.clonedeep';

// cloneObject( { a: '1', b: '2', c: '3' } );
// -> { a: '1', b: '2', c: '3' }

export function cloneObject<T>(obj: T): NonNullable<T> {
  if (!['object', 'array'].includes(type(obj))) {
    // @ts-ignore
    return {};
  }

  return cloneDeep<T>(obj) as NonNullable<T>;
}
