import { isArray, isObject, type } from '../general';

const DEFAULTS_OBJECT = new Set([
  'constructor',
  '__defineGetter__',
  '__defineSetter__',
  'hasOwnProperty',
  '__lookupGetter__',
  '__lookupSetter__',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toString',
  'valueOf',
  'toLocaleString',
]);

const DEFAULTS_ARRAY = new Set([
  'constructor',
  'concat',
  'copyWithin',
  'fill',
  'find',
  'findIndex',
  'flat',
  'lastIndexOf',
  'pop',
  'push',
  'reverse',
  'shift',
  'unshift',
  'slice',
  'sort',
  'splice',
  'includes',
  'indexOf',
  'join',
  'keys',
  'entries',
  'values',
  'forEach',
  'filter',
  'flatMap',
  'map',
  'every',
  'some',
  'reduce',
  'reduceRight',
  'toLocaleString',
  'toString',
  '__defineGetter__',
  '__defineSetter__',
  'hasOwnProperty',
  '__lookupGetter__',
  '__lookupSetter__',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'valueOf',
  'at',
  'findLast',
  'findLastIndex',
  'toReversed',
  'toSorted',
  'toSpliced',
  'with',
]);

export function objGetMethods<T>(obj: T, allowDefaults = false): string[] {
  if (!['object', 'array'].includes(type(obj))) {
    return [];
  }

  let currentObj = obj;
  const properties: Set<string> = new Set();

  do {
    const propertyNames = Object.getOwnPropertyNames(currentObj);
    for (const propertyName of propertyNames) {
      if (
        (!allowDefaults && isObject(obj) && DEFAULTS_OBJECT.has(propertyName)) ||
        (!allowDefaults && isArray(obj) && DEFAULTS_ARRAY.has(propertyName))
      ) {
        continue;
      }

      properties.add(propertyName);
    }
  } while ((currentObj = Object.getPrototypeOf(currentObj)));

  return [...properties.values()].filter((propertyName) => typeof obj[propertyName as keyof T] === 'function');
}
