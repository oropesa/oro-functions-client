import { isString } from './is-string';

describe('fn: is(Type)', () => {
  test('fn: isString()', () => {
    expect(isString()).toBe(false);
  });

  test('fn: isString( str )', () => {
    expect(isString(new String('1'))).toBe(false);
  });
});
