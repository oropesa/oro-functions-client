import { isArray } from './is-array';

describe('fn: is(Type)', () => {
  test('fn: isArray()', () => {
    expect(isArray()).toBe(false);
  });
});
