import { dateObjByToday } from './date-obj-by-today';
import { dateIsObj } from './is-date-obj';

describe('fn: dateIsObj', () => {
  test('fn: dateIsObj( date )', () => {
    expect(dateIsObj(new Date())).toBe(false);
  });

  test('fn: dateIsObj( DATE_OBJ )', () => {
    expect(dateIsObj(dateObjByToday())).toEqual(true);
  });
});
