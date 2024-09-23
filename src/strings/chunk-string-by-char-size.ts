import { isNully } from '../general';
import { isNumeric } from '../numbers';
import type { LeftRight } from './str-pad';

// chunkStringByCharSize( 'chacho', '|', 3 ) )
// -> 'cha|cho'

export function chunkStringByCharSize(str: string, sep: string, size: number, orientation: LeftRight = 'left') {
  if (!str) {
    return '';
  }
  if (!isNumeric(size) || Number(size) < 0) {
    return str;
  }

  const separator = isNully(sep) ? '' : String(sep);

  let string = String(str);

  const regex = new RegExp(`(.{${size}})`, 'g');

  if (orientation === 'right') {
    string = [...string]
      .reverse()
      .join('')
      .replace(regex, `$1${[...separator].reverse().join('')}`);
    string = [...string].reverse().join('');
    if (string.slice(0, separator.length) === separator) {
      string = string.slice(separator.length);
    }
    return string;
  }

  string = string.replace(regex, `$1${separator}`);
  if (string.slice(-separator.length) === separator) {
    string = string.slice(0, string.length - separator.length);
  }
  return string;
}
