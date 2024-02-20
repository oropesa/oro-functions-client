import { isFunction } from './is-function';

describe('fn: is(Type)', () => {
  test('fn: isFunction( obj )', () => {
    expect(isFunction({})).toBe(false);
  });

  test('fn: isFunction( fn arrow )', () => {
    expect(isFunction(() => {})).toBe(true);
  });
});
