import { isRegexp } from './is-regexp';

describe('fn: is(Type)', () => {
  test('fn: isRegexp( regexp )', () => {
    expect(isRegexp(/([A-Z])\w+/)).toBe(true);
  });
});
