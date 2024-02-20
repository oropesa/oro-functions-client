import { isObject } from './is-object';

describe('fn: is(Type)', () => {
  test('fn: isObject( obj )', () => {
    expect(isObject({})).toBe(true);
  });
});
