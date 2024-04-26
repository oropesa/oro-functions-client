import { DATE_OBJ, DATE_OBJ_CUSTOM_SEP, ISO_DATE } from './_dates.mocks';
import { dateIsBetween } from './date-is-between';

describe('fn: dateIsBetween', () => {
  test('fn: dateIsBetween( date + 1, objdateStart, objdateEnd )', () => {
    expect(dateIsBetween(ISO_DATE, DATE_OBJ, DATE_OBJ_CUSTOM_SEP)).toBe(true);
  });

  test('fn: dateIsBetween( date + 1, dateStart, dateEnd )', () => {
    expect(dateIsBetween(ISO_DATE, new Date(DATE_OBJ.timestamp), new Date(DATE_OBJ_CUSTOM_SEP.timestamp))).toBe(true);
  });
});
