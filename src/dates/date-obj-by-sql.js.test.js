import { DATE_OBJ } from './_dates.mocks';
import { dateObjBySql } from './date-obj-by-sql';

describe('fn: dateObjBySql', () => {
  test('fn: dateObjBySql( undefined )', () => {
    expect(dateObjBySql()).toBe(null);
  });

  test('fn: dateObjBySql( str )', () => {
    expect(dateObjBySql('2021-08-13 10:57:34', true)).toEqual(DATE_OBJ);
  });
});
