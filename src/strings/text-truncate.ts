import { isNumber, isString } from '../general/';
import { isNumeric } from '../numbers/';

export function textTruncate(str: string, max: number | true = 120, suffix = '...'): string {
  const string = isNumber(str) ? String(str) : str;

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
  if (min === -1) {
    min = maximum - postfix.length;
  }

  return `${string.slice(0, min)}${postfix}`;
}
