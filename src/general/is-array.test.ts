import { isArray } from './is-array';

describe('fn: is(Type)', () => {
  test('fn: isArray( arr )', () => {
    expect(isArray([])).toBe(true);
  });
});
