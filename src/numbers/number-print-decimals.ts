import { isNumeric } from './is-numeric';
import { numberFixDecimals } from './number-fix-decimals';

// numberFixDecimals( '2,1478' ); -> '2,15'
// numberFixDecimals( '2,1478', 6 ); -> '2,147800'
// numberFixDecimals( '2.1478', 6, false ); -> '2,1478'
// numberFixDecimals( '2.1478', 6, false, 5 ); -> '2,14780'

export function numberPrintDecimals(
  number: number | string,
  decimalLength: number | false | 'false' = 2,
  allowAllRightZeros = true,
  minRightZeros: number | boolean = 2,
): string {
  const string = numberFixDecimals(number, decimalLength, allowAllRightZeros, minRightZeros);
  return isNumeric(string) ? string.replace(/\./g, ',') : string;
}
