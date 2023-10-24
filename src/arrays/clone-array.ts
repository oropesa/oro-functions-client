import { isArray } from '../general';
import { cloneObject } from '../objects';

export function cloneArray<T>(array: T): NonNullable<T> {
  if (!isArray(array)) {
    return [] as NonNullable<T>;
  }

  return cloneObject(array);
}
