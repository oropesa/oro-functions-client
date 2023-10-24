import { isArray, isNumber, isString } from '../general';

// arrayGroupByKey( [ { id: 'alpha', category: 'male' }, { id: 'bravo', category: 'female' } ], 'category' );
// -> { 'male': [ { id: 'alpha', category: 'male' } ], 'female': [ { id: 'bravo', category: 'female' } ] }

export function arrayGroupByKey<T>(array: T[], key: string, strict = false): Record<string, T[]> {
  if (!isArray(array)) {
    return {};
  }

  let objKey = key;
  isNumber(objKey) && (objKey = String(objKey));
  if (!isString(objKey)) {
    return {};
  }

  const objResult: Record<string, T[]> = {};
  return array.reduce((objResult, item) => {
    if (item && (!strict || item[objKey as keyof T])) {
      objResult[String(item[objKey as keyof T])] = [
        ...(objResult[String(item[objKey as keyof T])] || []),
        item,
      ];
    }

    return objResult;
  }, objResult);
}
