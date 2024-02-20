import { isClass } from './is-class';

describe('fn: is(Type)', () => {
  test('fn: isClass( null )', () => {
    expect(isClass(null)).toBe(false);
  });

  test('fn: isClass( obj )', () => {
    expect(isClass({})).toBe(false);
  });

  test('fn: isClass( fn )', () => {
    expect(isClass(() => {})).toBe(false);
  });

  test('fn: isClass( class )', () => {
    class Custom {}

    expect(isClass(Custom)).toBe(true);
  });
});
