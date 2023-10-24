import { isArray } from '../general';
import { cloneArray } from './clone-array';
import { arrayGetUnique } from './array-get-unique';
import { arraysIntersection } from './arrays-intersection';

// arraysDifferenceAll( [ 1, 2, 3 ], [ 2, 3, 4 ] ); -> [ 1, 4 ]

export function arraysDifferenceAll<T>(...args: Array<T[]>): T[] {
  let arrayResult: T[] = [];
  let arrayIntersect: T[] = [];

  for (const array of args) {
    if (!isArray(array) || array.length === 0) {
      continue;
    }
    if (arrayResult.length === 0) {
      arrayResult = array;
      continue;
    }

    arrayIntersect = arrayGetUnique<T>([
      ...arrayIntersect,
      ...arraysIntersection<T>(arrayResult, array),
    ]);
    arrayResult = [
      ...arrayResult.filter((element) => !array.includes(element)),
      ...array.filter((element) => !arrayResult.includes(element)),
    ];
    arrayResult = arrayResult.filter((element) => !arrayIntersect.includes(element));
  }

  return cloneArray(arrayResult);
}
