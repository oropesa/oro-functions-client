import { isObject } from '../general';
import { cloneObject } from './clone-object';
import { objIsEmpty } from './obj-is-empty';

// mergeObjectsDeep( { a: { a1: '1', a2: '2' }, { a: { a1: '7', a3: '3' } );
// -> { a: { a1: '7', a2: '2', a3: '3' }

export function mergeObjectsDeep<T extends Record<string, any>>(...args: Array<Partial<T>>): T {
  let objMerged: Partial<T> = {};

  for (const obj of args) {
    if (!isObject(obj) || objIsEmpty(obj)) {
      continue;
    }

    if (objIsEmpty(objMerged)) {
      objMerged = cloneObject(obj);
      continue;
    }

    const objClone = cloneObject<Partial<T>>(obj);
    for (const key of Object.keys(objClone) as Array<keyof T>) {
      if (objMerged[key] === undefined) {
        objMerged[key] = objClone[key];
        continue;
      }
      if (!isObject(objClone[key]) || !isObject(objMerged[key])) {
        objMerged[key] = objClone[key];
        continue;
      }

      objMerged[key] = mergeObjectsDeep<NonNullable<T[keyof T]>>(
        objMerged[key],
        objClone[key] as NonNullable<T[keyof T]>,
      );
    }
  }

  return objMerged as T;
}
