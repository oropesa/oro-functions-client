import { isFunction } from './is-function';

describe('fn: is(Type)', () => {
  test('fn: isFunction()', () => {
    expect(isFunction()).toBe(false);
  });

  test('fn: isFunction( fn )', () => {
    expect(isFunction(() => {})).toBe(true);
  });
});
