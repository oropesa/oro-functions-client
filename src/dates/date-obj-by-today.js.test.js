import { dateObjByDate } from './date-obj-by-date';
import { dateObjByToday } from './date-obj-by-today';

describe('fn: dateObjByToday', () => {
  test('fn: dateObjByToday()', () => {
    const dateBefore = dateObjByDate(new Date());
    const DATE_OBJ = dateObjByToday(true);
    const dateAfter = dateObjByDate(new Date());

    expect(DATE_OBJ.date).toBe(dateBefore.date);
    expect(DATE_OBJ.date).toBe(dateAfter.date);
    expect(DATE_OBJ.timestamp).toBeGreaterThanOrEqual(dateBefore.timestamp);
    expect(DATE_OBJ.timestamp).toBeLessThanOrEqual(dateAfter.timestamp);
  });
});
