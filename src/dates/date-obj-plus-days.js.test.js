import { DATE_OBJ, ISO_DATE } from './_mocks';
import { dateObjPlusDays } from './date-obj-plus-days';

describe('fn: dateObjPlusDays', () => {
  test('fn: dateObjPlusDays( undefined )', () => {
    expect(dateObjPlusDays()).toBe(null);
  });

  test('fn: dateObjPlusDays( date )', () => {
    expect(dateObjPlusDays(ISO_DATE)).toEqual(DATE_OBJ);
  });
});
