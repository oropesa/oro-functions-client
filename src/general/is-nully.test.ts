import { isNully } from './is-nully';

describe('fn: is(Type)', () => {
  test('fn: isNully( null )', () => {
    expect(isNully(null)).toBe(true);
  });

  test('fn: isNully( obj )', () => {
    expect(isNully({})).toBe(false);
  });
});
