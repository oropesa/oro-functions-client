import { isNumber, isString } from '../general';

export function isNumeric(number: number | string): boolean {
  if (isNumber(number)) {
    return number - number === 0;
  }
  if (isString(number) && number.trim() !== '') {
    return Number.isFinite(Number(number));
  }

  return false;
}

// @deprecated
export function isNumberic(number: number | string): boolean {
  return isNumeric(number);
}
