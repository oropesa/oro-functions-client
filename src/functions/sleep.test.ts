import { performance } from 'node:perf_hooks';

import { sleep } from './sleep';

describe('fn: sleep', () => {
  test('fn: sleep()', async () => {
    const start = performance.now();
    await sleep();
    const end = performance.now();
    expect(end - start).toBeLessThan(90);
  });

  test('fn: sleep( 1000 )', async () => {
    const start = performance.now();
    await sleep(1000);
    const end = performance.now();
    expect(end - start).toBeGreaterThan(990);
    expect(end - start).toBeLessThan(1100);
  });

  test('fn: sleep( 3000 )', async () => {
    const start = performance.now();
    await sleep(2000);
    const end = performance.now();
    expect(end - start).toBeGreaterThan(1990);
    expect(end - start).toBeLessThan(2100);
  });
});
