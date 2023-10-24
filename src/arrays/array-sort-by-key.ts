import { isArray, isNumber, isString, isNully } from '../general';

// arraySortByKey( [ { id: 'alpha', category: 'male' }, { id: 'bravo', category: 'female' } ], 'category' );
// -> [ { id: 'bravo', category: 'female' }, { id: 'alpha', category: 'male' } ]

export function arraySortByKey<T>(array: T[], key: string, sortArray?: string[]): T[] {
  if (!isArray(array)) {
    return [];
  }

  let objKey = key;
  isNumber(objKey) && (objKey = String(objKey));
  if (!isString(objKey)) {
    return [];
  }

  const values = isArray(sortArray)
    ? [...array].sort((a, b) => {
        if (b[objKey as keyof T] === undefined) {
          return -1;
        }
        if (a[objKey as keyof T] === undefined) {
          return 1;
        }

        let indexA = sortArray.indexOf(String(a[objKey as keyof T]));
        if (indexA === -1) {
          return 1;
        }

        let indexB = sortArray.indexOf(String(b[objKey as keyof T]));
        if (indexB === -1) {
          return -1;
        }

        return indexA > indexB ? 1 : indexA < indexB ? -1 : 0;
      })
    : [...array].sort((a, b) =>
        b[objKey as keyof T] === undefined
          ? -1
          : a[objKey as keyof T] === undefined
          ? 1
          : a[objKey as keyof T] > b[objKey as keyof T]
          ? 1
          : a[objKey as keyof T] < b[objKey as keyof T]
          ? -1
          : 0,
      );

  return values.filter((element) => !isNully(element));
}
