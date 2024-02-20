import { isArray, isNully, isNumber, isString } from '../general';

// arraySortByKey( [ { id: 'alpha', category: 'male' }, { id: 'bravo', category: 'female' } ], 'category' );
// -> [ { id: 'bravo', category: 'female' }, { id: 'alpha', category: 'male' } ]

export function arraySortByKey<T extends Record<string, any>>(array: T[], key: keyof T, sortArray?: string[]): T[] {
  if (!isArray(array) || array.length === 0) {
    return [];
  }

  const objKey = isNumber(key) ? (String(key) as keyof T) : key;
  if (!isString(objKey)) {
    return array;
  }

  const sortedArray = isArray(sortArray) ? sortArray : [];

  return array
    .sort((a, b) => {
      const valueA = a[objKey];
      const valueB = b[objKey];

      if (valueA === undefined || valueB === undefined) {
        return valueA === undefined && valueB === undefined ? 0 : valueB === undefined ? -1 : 1;
      }

      const indexA = sortedArray.length === 0 ? -1 : sortedArray.indexOf(valueA);
      const indexB = sortedArray.length === 0 ? -1 : sortedArray.indexOf(valueB);

      if (indexA === -1 && indexB === -1) {
        return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
      }

      if (indexA === -1 || indexB === -1) {
        return indexB === -1 ? -1 : 1;
      }

      return indexA > indexB ? 1 : indexA < indexB ? -1 : 0;
    })
    .filter((element) => !isNully(element));
}
