import { randomMinMax } from './random-min-max';

describe('fn: randomMinMax', () => {
  test('fn: randomMinMax( str, bool )', () => {
    const value = randomMinMax('str', true);
    expect(value).toBeGreaterThanOrEqual(0);
    expect(value).toBeLessThanOrEqual(100);
  });
});
