import { isNumeric } from './is-numeric';

export function isOdd(number: number): boolean {
  return isNumeric(number) ? !!(Number(number) & 1) : false;
}
