import { isNumber, isString } from '../general';

export function trimAll(str: string): string {
  const string = isNumber(str) ? String(str) : str;

  if (!isString(string)) {
    return '';
  }

  return string.trim().replace(/  +/g, ' ');
}
