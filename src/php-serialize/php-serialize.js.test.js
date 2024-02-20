import { phpSerialize } from './php-serialize';

describe('fn: phpSerialize', () => {
  test('fn: phpSerialize( undefined )', () => {
    expect(phpSerialize()).toBe(undefined);
  });
});
