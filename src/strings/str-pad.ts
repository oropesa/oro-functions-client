import { isNumeric } from '../numbers';
import { isNully, isString } from '../general';

export type LeftRight = 'left' | 'right';

export function strPad(
  str: string | number,
  length: number,
  pad: string | number = ' ',
  leftRight: LeftRight = 'left',
): string {
  let position: LeftRight = leftRight;
  !['left', 'right'].includes(position) && (position = 'left');

  let string = str;
  isNully(string) && (string = '');
  string = String(string);

  let size = length;
  (!isNumeric(size) || !size) && (size = string.length);
  size < 0 && (size = 0);

  if (string.length >= length) {
    return position === 'left' ? string.slice(0, length) : string.slice(-length);
  }

  let substring = pad;
  !isString(substring) && (substring = String(substring));

  let padString = Array.from({ length: size + 1 }).join(substring);
  padString = padString.slice(0, size - string.length);

  return position === 'left' ? padString + string : string + padString;
}
