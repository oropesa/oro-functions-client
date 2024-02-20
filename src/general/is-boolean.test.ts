import { isBoolean } from './is-boolean';

describe('fn: is(Type)', () => {
  test('fn: isBoolean( bool )', () => {
    expect(isBoolean(false)).toBe(true);
  });
});
