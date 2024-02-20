import { isArray } from '../general';
import { cloneArray } from './clone-array';

// arraysIntersection( [ 1, 2, 3 ], [ 2, 3, 4 ] );
// -> [ 2, 3 ]

export function arraysIntersection<T>(...args: Array<T[]>): T[] {
  let arrayResult: T[] = [...(isArray(args[0]) ? args[0] : [])];
  for (let index = 1, length = args.length; index < length; index++) {
    const array = args[index];
    if (!isArray(array)) {
      continue;
    }

    arrayResult = arrayResult.filter((element) => array.includes(element));
  }

  return cloneArray(arrayResult);
}
