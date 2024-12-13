import { isNumeric } from '../numbers';

export function sleep(ms?: number): Promise<void> {
  const milliseconds = Math.floor(isNumeric(ms as number) ? (ms as number) : 0);

  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}
