import { isDate } from './is-date';

describe('fn: is(Type)', () => {
  test('fn: isDate()', () => {
    expect(isDate()).toBe(false);
  });
});
