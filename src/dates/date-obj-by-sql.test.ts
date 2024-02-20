import { DATE_OBJ, DATE_OBJ_CUSTOM_SEP } from './_mocks';
import { dateObjBySql } from './date-obj-by-sql';

describe('fn: dateObjBySql', () => {
  test('fn: dateObjBySql( str bad )', () => {
    expect(dateObjBySql('2021/08/13')).toBe(null);
  });

  test('fn: dateObjBySql( str )', () => {
    expect(dateObjBySql('2021-08-13 10:57:34')).toEqual(DATE_OBJ);
  });

  test('fn: dateObjBySql( str, sep )', () => {
    expect(dateObjBySql('2021-08-13 10:57:34', '-')).toEqual(DATE_OBJ_CUSTOM_SEP);
  });

  test('fn: dateObjBySql( str, { sep } )', () => {
    expect(dateObjBySql('2021-08-13 10:57:34', { sep: '-' })).toEqual(DATE_OBJ_CUSTOM_SEP);
  });
});
