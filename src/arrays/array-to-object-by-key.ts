import { isArray, isNumber, isString, isNully } from '../general';

// arrayToObjectByKey( [ { id: 'alpha', name: 'Alpha' }, { id: 'bravo', name: 'Bravo' } ], 'id' );
// -> { 'alpha': { id: 'alpha', name: 'Alpha' }, 'bravo': { id: 'bravo', name: 'Bravo' }

export function arrayToObjectByKey<T>(array: T[], key: string, strict = false): Record<string, T> {
  if (!isArray(array)) {
    return {};
  }

  let objKey = key;
  isNumber(objKey) && (objKey = String(objKey));
  if (!isString(objKey)) {
    return {};
  }

  const objResult: Record<string, T> = {};
  return array.reduce((objResult, item) => {
    return !isNully(item) && (!strict || item[objKey as keyof T] !== undefined)
      ? { ...objResult, [String(item[objKey as keyof T])]: item }
      : { ...objResult };
  }, objResult);
}
