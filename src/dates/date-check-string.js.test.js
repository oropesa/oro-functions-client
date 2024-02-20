import { dateCheckString } from './date-check-string';

describe('fn: dateCheckString', () => {
  test('fn: dateCheckString( undefined )', () => {
    expect(dateCheckString()).toBe(false);
  });
});
