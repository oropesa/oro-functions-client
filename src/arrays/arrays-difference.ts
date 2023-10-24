import { isArray } from '../general';
import { cloneArray } from './clone-array';

// arraysDifference( [ 1, 2, 3 ], [ 2, 3, 4 ] ); -> [ 1 ]

export function arraysDifference<T>(...args: Array<T[]>): T[] {
  let arrayResult: T[] = [];

  for (const array of args) {
    if (!isArray(array) || array.length === 0) {
      continue;
    }
    if (arrayResult.length === 0) {
      arrayResult = array;
      continue;
    }

    arrayResult = arrayResult.filter((element) => !array.includes(element));
  }

  return cloneArray(arrayResult);
}
