import { DATE_OBJ, TIMESTAMP_DATE } from './_mocks';
import { dateObjByTimestamp } from './date-obj-by-timestamp';

describe('fn: dateObjByTimestamp', () => {
  test('fn: dateObjByTimestamp( undefined )', () => {
    expect(dateObjByTimestamp()).toBe(null);
  });

  test('fn: dateObjByTimestamp( str bad )', () => {
    expect(dateObjByTimestamp('chacho')).toBe(null);
  });

  test('fn: dateObjByTimestamp( int )', () => {
    expect(dateObjByTimestamp(TIMESTAMP_DATE, true)).toEqual(DATE_OBJ);
  });
});
