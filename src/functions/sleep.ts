import { isNumeric } from '../numbers';

export function sleep(ms?: number): Promise<void> {
  const milliseconds = Math.floor(!isNumeric(ms as number) ? 0 : (ms as number));

  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}
