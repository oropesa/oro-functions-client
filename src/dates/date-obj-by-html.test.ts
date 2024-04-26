import { DATE_OBJ, DATE_OBJ_CUSTOM_SEP, DATE_OBJ_NO_TIME } from './_dates.mocks';
import { dateObjByHtml } from './date-obj-by-html';

describe('fn: dateObjByHtml', () => {
  test('fn: dateObjByHtml( str bad )', () => {
    expect(dateObjByHtml('2021-08-13')).toBe(null);
  });

  test('fn: dateObjByHtml( str short )', () => {
    expect(dateObjByHtml('13/08/2021')).toEqual(expect.objectContaining(DATE_OBJ_NO_TIME));
  });

  test('fn: dateObjByHtml( str )', () => {
    expect(dateObjByHtml('13/08/2021 10:57:34')).toEqual(DATE_OBJ);
  });

  test('fn: dateObjByHtml( str, sep )', () => {
    expect(dateObjByHtml('13-08-2021 10:57:34', '-')).toEqual(DATE_OBJ_CUSTOM_SEP);
  });

  test('fn: dateObjByHtml( str, { sep } )', () => {
    expect(dateObjByHtml('13-08-2021 10:57:34', { sep: '-' })).toEqual(DATE_OBJ_CUSTOM_SEP);
  });
});
