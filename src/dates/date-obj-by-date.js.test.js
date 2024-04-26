import { DATE_OBJ } from './_dates.mocks';
import { dateObjByDate } from './date-obj-by-date';

describe('fn: dateObjByDate', () => {
  test('fn: dateObjByDate( undefined )', () => {
    expect(dateObjByDate()).toBe(null);
  });

  test('fn: dateObjByDate( date )', () => {
    expect(dateObjByDate(new Date('2021-08-13 10:57:34'), true)).toEqual(DATE_OBJ);
  });
});
