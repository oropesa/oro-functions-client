import { ISO_DATE } from './_mocks';
import { datesDiffMonths } from './dates-diff-months';

describe('fn: datesDiffMonths', () => {
  test('fn: datesDiffMonths( undefined )', () => {
    expect(datesDiffMonths()).toBe(0);
  });

  test('fn: datesDiffMonths( date )', () => {
    expect(datesDiffMonths(ISO_DATE)).toBe(0);
  });
});
