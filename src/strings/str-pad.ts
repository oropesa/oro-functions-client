import { isNully, isString } from '../general';
import { isNumeric } from '../numbers';

export type LeftRight = 'left' | 'right';

export function strPad(
  str: string | number,
  length: number,
  pad: string | number = ' ',
  leftRight: LeftRight = 'left',
): string {
  const position: LeftRight = ['left', 'right'].includes(leftRight) ? leftRight : 'left';
  const string = isNully(str) ? '' : String(str);
  const size = Math.max(0, !isNumeric(length) || !length ? string.length : length);

  if (string.length >= length) {
    return position === 'left' ? string.slice(0, length) : string.slice(-length);
  }

  const substring = isString(pad) ? pad : String(pad);

  let padString = Array.from({ length: size + 1 }).join(substring);
  padString = padString.slice(0, size - string.length);

  return position === 'left' ? padString + string : string + padString;
}
