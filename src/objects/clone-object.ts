import cloneDeep from 'lodash.clonedeep';

import { isNully, type } from '../general';

// cloneObject( { a: '1', b: '2', c: '3' } );
// -> { a: '1', b: '2', c: '3' }

export function cloneObject<T extends Record<string | number, any> | undefined | null>(obj: T): NonNullable<T> {
  if (!['object', 'array'].includes(type(obj)) || isNully(obj)) {
    // @ts-expect-error Typescript compilation should avoid this exception, but common-js does not
    return {};
  }

  return cloneDeep<T>(obj) as NonNullable<T>;
}
