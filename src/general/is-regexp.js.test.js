import { isRegexp } from './is-regexp';

describe('fn: is(Type)', () => {
  test('fn: isRegexp()', () => {
    expect(isRegexp()).toBe(false);
  });
});
