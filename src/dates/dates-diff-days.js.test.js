import { ISO_DATE } from './_dates.mocks';
import { datesDiffDays } from './dates-diff-days';

describe('fn: datesDiffDays', () => {
  test('fn: datesDiffDays( undefined )', () => {
    expect(datesDiffDays()).toBe(0);
  });

  test('fn: datesDiffDays( date )', () => {
    expect(datesDiffDays(ISO_DATE)).toBe(0);
  });
});
