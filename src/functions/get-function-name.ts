import { isFunction } from '../general';

export function getFunctionName(fn?: string | Function): string {
  if (fn !== undefined) {
    if (isFunction(fn)) {
      return fn.name;
    }

    const result = /^function\s+([\w$]+)\s*\(/.exec(fn.toString());
    return result ? result[1] : '';
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

const findFirstOccurrence = (string: string, searchElements: string[], fromIndex = 0) => {
  let min = string.length;
  for (const searchElement of searchElements) {
    const occ = string.indexOf(searchElement, fromIndex);
    if (occ !== -1 && occ < min) {
      min = occ;
    }
  }
  return min === string.length ? -1 : min;
};
