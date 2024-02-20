import { DATE_OBJ, DATE_OBJ_CUSTOM_SEP } from './_mocks';
import { dateObjByDate } from './date-obj-by-date';

describe('fn: dateObjByDate', () => {
  test('fn: dateObjByDate( date )', () => {
    expect(dateObjByDate(new Date('2021-08-13 10:57:34'))).toEqual(DATE_OBJ);
  });

  test('fn: dateObjByDate( date, sep )', () => {
    expect(dateObjByDate(new Date('2021-08-13 10:57:34'), '-')).toEqual(DATE_OBJ_CUSTOM_SEP);
  });

  test('fn: dateObjByDate( date, { sep } )', () => {
    expect(dateObjByDate(new Date('2021-08-13 10:57:34'), { sep: '-' })).toEqual(DATE_OBJ_CUSTOM_SEP);
  });
});
