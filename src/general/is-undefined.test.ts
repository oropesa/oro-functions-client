import { isUndefined } from './is-undefined';

describe('fn: is(Type)', () => {
  test('fn: isUndefined( obj )', () => {
    expect(isUndefined({})).toBe(false);
  });
});
