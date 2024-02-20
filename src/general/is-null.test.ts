import { isNull } from './is-null';

describe('fn: is(Type)', () => {
  test('fn: isNull( null )', () => {
    expect(isNull(null)).toBe(true);
  });

  test('fn: isNull( obj )', () => {
    expect(isNull({})).toBe(false);
  });
});
