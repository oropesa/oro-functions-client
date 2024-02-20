import { isBoolean } from './is-boolean';

describe('fn: is(Type)', () => {
  test('fn: isBoolean()', () => {
    expect(isBoolean()).toBe(false);
  });
});
