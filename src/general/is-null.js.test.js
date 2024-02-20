import { isNull } from './is-null';

describe('fn: is(Type)', () => {
  test('fn: isNull()', () => {
    expect(isNull()).toBe(false);
  });
});
