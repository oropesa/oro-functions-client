import { isNumeric } from './is-numeric';

export function isEven(number: number): boolean {
  return isNumeric(number) ? !(Number(number) & 1) : false;
}
