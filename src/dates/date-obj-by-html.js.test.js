import { DATE_OBJ } from './_mocks';
import { dateObjByHtml } from './date-obj-by-html';

describe('fn: dateObjByHtml', () => {
  test('fn: dateObjByHtml( undefined )', () => {
    expect(dateObjByHtml()).toBe(null);
  });

  test('fn: dateObjByHtml( str )', () => {
    expect(dateObjByHtml('13/08/2021 10:57:34', true)).toEqual(DATE_OBJ);
  });
});
