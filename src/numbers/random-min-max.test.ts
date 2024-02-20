import { randomMinMax } from './random-min-max';

describe('fn: randomMinMax', () => {
  test('fn: randomMinMax()', () => {
    const value = randomMinMax();
    expect(value).toBeGreaterThanOrEqual(0);
    expect(value).toBeLessThanOrEqual(100);
  });

  test('fn: randomMinMax( 101 )', () => {
    const value = randomMinMax(101);
    expect(value).toBeGreaterThanOrEqual(100);
    expect(value).toBeLessThanOrEqual(101);
  });

  test('fn: randomMinMax( 10, 20 )', () => {
    const value = randomMinMax(10, 20);
    expect(value).toBeGreaterThanOrEqual(10);
    expect(value).toBeLessThanOrEqual(20);
  });

  test('fn: randomMinMax( 20, 10 )', () => {
    const value = randomMinMax(20, 10);
    expect(value).toBeGreaterThanOrEqual(10);
    expect(value).toBeLessThanOrEqual(20);
  });

  test('fn: randomMinMax( -20, -10 )', () => {
    const value = randomMinMax(-20, -10);
    expect(value).toBeGreaterThanOrEqual(-20);
    expect(value).toBeLessThanOrEqual(-10);
  });
});
