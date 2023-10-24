import { isNumber, isString } from '../general';

export function substrCount(str: string, substr: string): number {
  let string = str;
  let substring = substr;
  isNumber(string) && (string = String(string));
  isNumber(substring) && (substring = String(substring));

  if (!isString(string) || !isString(substring) || !string || !substring) {
    return 0;
  }

  let regex = new RegExp(substring, 'g');
  return (string.match(regex) ?? []).length;
}
