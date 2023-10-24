import { isNully } from '../general';
import { isNumeric } from '../numbers';
import type { LeftRight } from './str-pad';

// chunkStringByCharSize( 'chacho', '|', 3 ) )
// -> 'cha|cho'

export function chunkStringByCharSize(
  str: string,
  char: string,
  size: number,
  orientation: LeftRight = 'left',
) {
  if (!str) {
    return '';
  }
  if (!isNumeric(size) || Number(size) < 0) {
    return str;
  }

  let character = char;
  isNully(char) && (character = '');
  character = String(character);

  let string = str;
  string = String(string);

  const regex = new RegExp(`(.{${size}})`, 'g');

  if (orientation === 'right') {
    string = [...string]
      .reverse()
      .join('')
      .replace(regex, `$1${[...character].reverse().join('')}`);
    string = [...string].reverse().join('');
    string.slice(0, character.length) === character && (string = string.slice(character.length));
    return string;
  }

  string = string.replace(regex, `$1${character}`);
  string.slice(-character.length) === character &&
    (string = string.slice(0, string.length - character.length));
  return string;
}
