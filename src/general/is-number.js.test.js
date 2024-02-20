import { isNumber } from './is-number';

describe('fn: is(Type)', () => {
  test('fn: isNumber()', () => {
    expect(isNumber()).toBe(false);
  });

  test('fn: isNumber( number )', () => {
    expect(isNumber(new Number(1))).toBe(false);
  });
});
