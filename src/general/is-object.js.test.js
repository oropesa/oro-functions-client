import { isObject } from './is-object';

describe('fn: is(Type)', () => {
  test('fn: isObject()', () => {
    expect(isObject()).toBe(false);
  });
});
