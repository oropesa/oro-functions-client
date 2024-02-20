import { jsonize } from './jsonize';

describe('fn: jsonize', () => {
  test('fn: jsonize( undefined )', () => {
    expect(jsonize()).toBe(undefined);
  });

  test('fn: jsonize( int )', () => {
    expect(jsonize(17)).toBe(17);
  });
});
