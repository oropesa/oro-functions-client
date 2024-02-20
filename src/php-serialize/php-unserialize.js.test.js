import { phpUnserialize } from './php-unserialize';

describe('fn: phpUnserialize', () => {
  test('fn: phpUnserialize( undefined )', () => {
    expect(phpUnserialize()).toBe(undefined);
  });
});
