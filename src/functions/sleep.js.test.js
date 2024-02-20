import { performance } from 'node:perf_hooks';

import { sleep } from './sleep';

describe('fn: sleep', () => {
  test('fn: sleep( NaN )', async () => {
    const start = performance.now();
    await sleep(true);
    const end = performance.now();
    expect(end - start).toBeLessThan(90);
  });
});
