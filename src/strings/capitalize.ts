import { isNumber, isString } from '../general';

export function capitalize(str: string) {
  const string = isNumber(str) ? String(str) : str;

  if (!isString(string)) {
    return '';
  }

  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}
