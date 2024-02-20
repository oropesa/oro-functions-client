import { isNumber } from './is-number';

describe('fn: is(Type)', () => {
  test('fn: isNumber()', () => {
    expect(isNumber('3')).toBe(false);
  });

  test('fn: isNumber( number )', () => {
    expect(isNumber(3)).toBe(true);
  });
});
