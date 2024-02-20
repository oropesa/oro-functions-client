import { phpIsSerialized } from './php-is-serialized';

describe('fn: phpIsSerialized', () => {
  test('fn: phpIsSerialized( undefined )', () => {
    expect(phpIsSerialized()).toBe(false);
  });
});
