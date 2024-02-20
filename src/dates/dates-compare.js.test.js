import { dateObjByToday } from './date-obj-by-today';
import { datesCompare } from './dates-compare';

describe('fn: datesCompare', () => {
  test('fn: datesCompare( undefined )', () => {
    expect(datesCompare()).toBe(0);
  });

  test('fn: datesCompare( str, bool )', () => {
    expect(datesCompare('chacho', true)).toBe(0);
  });

  test('fn: datesCompare( date )', () => {
    expect(datesCompare(new Date())).toBe(-1);
  });

  test('fn: datesCompare( null, DATE_OBJ )', () => {
    expect(datesCompare(null, dateObjByToday())).toBe(1);
  });
});
