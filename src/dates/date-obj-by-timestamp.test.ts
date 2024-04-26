import { DATE_OBJ, DATE_OBJ_CUSTOM_SEP, TIMESTAMP_DATE } from './_dates.mocks';
import { dateObjByTimestamp } from './date-obj-by-timestamp';

describe('fn: dateObjByTimestamp', () => {
  test('fn: dateObjByTimestamp( int )', () => {
    expect(dateObjByTimestamp(TIMESTAMP_DATE)).toEqual(DATE_OBJ);
  });

  test('fn: dateObjByTimestamp( int, sep )', () => {
    expect(dateObjByTimestamp(TIMESTAMP_DATE, '-')).toEqual(DATE_OBJ_CUSTOM_SEP);
  });

  test('fn: dateObjByTimestamp( int, { sep } )', () => {
    expect(dateObjByTimestamp(TIMESTAMP_DATE, { sep: '-' })).toEqual(DATE_OBJ_CUSTOM_SEP);
  });
});
