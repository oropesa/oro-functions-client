import { DATE_OBJ, DATE_OBJ_CUSTOM_SEP, ISO_DATE } from './_mocks';
import { dateObjPlusDays } from './date-obj-plus-days';

describe('fn: dateObjPlusDays', () => {
  test('fn: dateObjPlusDays( date, 1 )', () => {
    expect(dateObjPlusDays(ISO_DATE, 1).date).toBe('14/08/2021');
  });

  test('fn: dateObjPlusDays( DATE_OBJ, 1 )', () => {
    expect(dateObjPlusDays(DATE_OBJ, 1).date).toBe('14/08/2021');
  });

  test('fn: dateObjPlusDays( dateObj2, -1 )', () => {
    expect(dateObjPlusDays(DATE_OBJ_CUSTOM_SEP, -1).date).toBe('12-08-2021');
  });
});
