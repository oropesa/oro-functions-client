import { isClass } from './is-class';

describe('fn: is(Type)', () => {
  test('fn: isClass()', () => {
    expect(isClass()).toBe(false);
  });
});
