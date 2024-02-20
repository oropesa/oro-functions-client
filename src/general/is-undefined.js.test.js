import { isUndefined } from './is-undefined';

describe('fn: is(Type)', () => {
  test('fn: isUndefined()', () => {
    expect(isUndefined()).toBe(true);
  });
});
