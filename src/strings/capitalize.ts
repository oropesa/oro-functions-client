import { isNumber, isString } from '../general';

export function capitalize(str: string) {
  let string = str;
  isNumber(string) && (string = String(string));
  isString(string) && (string = String(string));

  if (!isString(string)) {
    return '';
  }

  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}
