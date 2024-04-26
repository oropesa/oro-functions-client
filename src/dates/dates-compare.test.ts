import { DATE_OBJ } from './_dates.mocks';
import { dateObjByToday } from './date-obj-by-today';
import { datesCompare } from './dates-compare';

describe('fn: datesCompare', () => {
  test('fn: datesCompare( date, DATE_OBJ )', () => {
    expect(datesCompare(new Date(), DATE_OBJ)).toBe(-1);
  });

  test('fn: datesCompare( DATE_OBJ, DATE_OBJ )', () => {
    expect(datesCompare(DATE_OBJ, dateObjByToday())).toBe(1);
  });
});
