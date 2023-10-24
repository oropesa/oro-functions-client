import { isNumeric } from '../numbers';

export function sleep(ms?: number): Promise<void> {
  let milliseconds = ms ?? 0;
  !isNumeric(ms ?? '') && (milliseconds = 0);

  milliseconds = Math.floor(milliseconds);

  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}
