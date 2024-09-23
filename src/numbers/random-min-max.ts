import { isNumeric } from './is-numeric';

export function randomMinMax(min = 0, max = 100): number {
  let minimum = isNumeric(min) ? Number(min) : 0;
  let maximum = isNumeric(max) ? Number(max) : 100;

  if (minimum > maximum) {
    [minimum, maximum] = [maximum, minimum];
  }

  return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
}
