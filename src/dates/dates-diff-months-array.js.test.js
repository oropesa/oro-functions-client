import { ISO_DATE } from './_dates.mocks';
import { datesDiffMonthsArray } from './dates-diff-months-array';

describe('fn: datesDiffMonthsArray', () => {
  test('fn: datesDiffMonthsArray( undefined )', () => {
    expect(datesDiffMonthsArray()).toEqual([]);
  });

  test('fn: datesDiffMonthsArray( date )', () => {
    expect(datesDiffMonthsArray(ISO_DATE)).toEqual([]);
  });
});
