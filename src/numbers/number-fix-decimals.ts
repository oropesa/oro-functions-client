import { isBoolean, isNully, isNumber, isString } from '../general';
import { strPad } from '../strings';
import { isNumeric } from './is-numeric';

// numberFixDecimals( '2,1478' ); -> '2.15'
// numberFixDecimals( '2,1478', 6 ); -> '2.147800'
// numberFixDecimals( '2.1478', 6, false ); -> '2.1478'
// numberFixDecimals( '2.1478', 6, false, 5 ); -> '2.14780'

export function numberFixDecimals(
  number: number | string,
  decimalLength: number | false | 'false' = 2,
  allowAllRightZeros = true,
  minRightZeros: number | boolean = true,
): string {
  let string = isNully(number) ? '' : number;

  if ((!isString(number) && !isNumber(number)) || (isString(string) && !string)) {
    return String(string);
  }

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

  if (!isNumeric(length) || length < 0) {
    length = 0;
  }
  string = String(Number(`${Math.round(Number(`${string}e+${length}`))}e-${length}`));

  const minRight = !isBoolean(minRightZeros) && (!isNumeric(minRightZeros) || minRightZeros < 0) ? 0 : minRightZeros;

  const parts = string.split('.');
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

  if (minRight === false && !Number(decimals)) {
    decimals = '';
  }

  if (decimals.length > 0) {
    decimals = `.${decimals}`;
  }

  return `${parts[0]}${decimals}`;
}
