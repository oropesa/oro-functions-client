import { isArray } from '../general';

// arrayGetUnique( [ 1, 1, 2, 1, 3 ] );
// -> [ 1, 2, 3 ]

export function arrayGetUnique<T>(array: T[]): T[] {
  if (!isArray(array)) {
    return [];
  }

  const primitiveSet: Set<T> = new Set();
  const objectStringSet: Set<string> = new Set();
  const objectSet: Set<T> = new Set();
  for (const element of array) {
    if (typeof element !== 'object') {
      primitiveSet.add(element);
      continue;
    }

    const previousSize = objectStringSet.size;
    objectStringSet.add(JSON.stringify(element));
    if (previousSize === objectStringSet.size) {
      continue;
    }

    objectSet.add(element);
  }

  return [...primitiveSet.values(), ...objectSet.values()];
}
