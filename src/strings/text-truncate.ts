import { isNumber, isString } from '../general/';
import { isNumeric } from '../numbers/';

export function textTruncate(str: string, max: number | true = 120, suffix = '...'): string {
  let string = str;
  isNumber(string) && (string = String(string));

  if (!isString(string)) {
    return '';
  }
  if (max === true) {
    return string;
  }

  const maximum = isNumeric(max) ? max : 120;
  const postfix = suffix === null ? '...' : String(suffix);

  if (postfix.length >= maximum) {
    return postfix.slice(-maximum);
  }
  if (string.length <= maximum) {
    return string;
  }

  let min = string.slice(0, maximum - postfix.length).lastIndexOf(' ');
  min === -1 && (min = maximum - postfix.length);

  return `${string.slice(0, min)}${postfix}`;
}
