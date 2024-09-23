import { isFunction } from '../general';

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export function getFunctionName(fn?: string | Function): string {
  if (fn !== undefined) {
    if (isFunction(fn)) {
      return fn.name;
    }

    try {
      if (isFunction((global as any)[fn])) {
        return (global as any)[fn].name;
      }
    } catch {}

    try {
      if (isFunction((window as any)[fn])) {
        return (window as any)[fn].name;
      }
    } catch {}

    return '';
  }

  const obj = {};
  Error.captureStackTrace(obj, getFunctionName);
  const { stack } = obj as Error;
  if (stack === undefined) {
    return '';
  }

  const firstCharacter = stack.indexOf('at ', stack.indexOf('at ') + 1) + 3;
  const lastCharacter = findFirstOccurrence(stack, [' ', ':', '\n'], firstCharacter);
  return stack.slice(firstCharacter, lastCharacter).replace('Object.', '');
}

const findFirstOccurrence = (string: string, searchElements: string[], fromIndex: number) => {
  let min = string.length;
  for (const searchElement of searchElements) {
    const occ = string.indexOf(searchElement, fromIndex);
    if (occ !== -1 && occ < min) {
      min = occ;
    }
  }
  return min === string.length ? -1 : min;
};
