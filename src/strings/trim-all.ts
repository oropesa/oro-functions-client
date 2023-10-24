import { isNumber, isString } from '../general';

export function trimAll(str: string): string {
  let string = str;
  isNumber(string) && (string = String(string));

  if (!isString(string)) {
    return '';
  }

  return string.trim().replace(/  +/g, ' ');
}
