import { dateIsObj } from './is-date-obj';

describe('fn: dateIsObj', () => {
  test('fn: dateIsObj( undefined )', () => {
    expect(dateIsObj()).toBe(false);
  });
});
