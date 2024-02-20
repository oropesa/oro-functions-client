import { isDate } from './is-date';

describe('fn: is(Type)', () => {
  test('fn: isDate( date )', () => {
    expect(isDate(new Date())).toBe(true);
  });
});
