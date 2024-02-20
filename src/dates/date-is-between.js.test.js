import { DATE_OBJ, DATE_OBJ_CUSTOM_SEP, ISO_DATE } from './_mocks';
import { dateIsBetween } from './date-is-between';
import { dateObjPlusDays } from './date-obj-plus-days';

describe('fn: dateIsBetween', () => {
  test('fn: dateIsBetween( undefined )', () => {
    expect(dateIsBetween()).toBe(false);
  });

  test('fn: dateIsBetween( date )', () => {
    expect(dateIsBetween(ISO_DATE)).toBe(false);
  });

  test('fn: dateIsBetween( date, dateStart )', () => {
    expect(dateIsBetween(ISO_DATE, DATE_OBJ)).toBe(false);
  });

  test('fn: dateIsBetween( date + 1, dateStart, dateEnd )', () => {
    expect(dateIsBetween(dateObjPlusDays(ISO_DATE, 1), DATE_OBJ, DATE_OBJ_CUSTOM_SEP)).toBe(false);
  });
});
