import { isString } from './is-string';

describe('fn: is(Type)', () => {
  test('fn: isString( str )', () => {
    expect(isString('1')).toBe(true);
  });
});
