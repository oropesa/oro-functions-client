import { strPad } from '../strings';
import { isNumeric } from './is-numeric';
import { isBoolean, isNully, isNumber, isString } from '../general';

// numberFixDecimals( '2,1478' ); -> '2.15'
// numberFixDecimals( '2,1478', 6 ); -> '2.147800'
// numberFixDecimals( '2.1478', 6, false ); -> '2.1478'
// numberFixDecimals( '2.1478', 6, false, 5 ); -> '2.14780'

// eslint-disable-next-line complexity
export function numberFixDecimals(
  number: number | string,
  decimalLength: number | false | 'false' = 2,
  allowAllRightZeros = true,
  minRightZeros: number | boolean = true,
): string {
  let string = number;
  isNully(string) && (string = '');

  if (!isString(number) && !isNumber(number)) {
    return String(string);
  }

  !string && (string = 0);
  string = String(string);

  const tmp = string;
  string = string.replace(/,/g, '.');
  if (!isNumeric(string)) {
    return tmp;
  }

  // allow all decimals
  let length = decimalLength;
  if (length === false || length === 'false') {
    return string;
  }

  (!isNumeric(length) || length < 0) && (length = 0);
  string = String(Number(Math.round(Number(string + `e+${length}`)) + `e-${length}`));

  let minRight = minRightZeros;
  !isBoolean(minRight) && (!isNumeric(minRight) || minRight < 0) && (minRight = 0);

  let parts = string.split('.');
  if (parts[1] === undefined) {
    parts.push('');
  }

  let decimals = strPad(parts[1], length, '0', 'right');
  if (!allowAllRightZeros) {
    decimals = decimals.replace(/0+$/g, '');

    if (decimals.length > 0 && !isBoolean(minRight) && decimals.length < minRight) {
      decimals = strPad(parts[1], minRight, '0', 'right');
    }
  }

  minRight === false && !Number(decimals) && (decimals = '');

  decimals.length > 0 && (decimals = `.${decimals}`);
  return `${parts[0]}${decimals}`;
}
