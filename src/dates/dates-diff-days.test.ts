import { dateObjBySql } from './date-obj-by-sql';
import { datesDiffDays } from './dates-diff-days';

describe('fn: datesDiffDays', () => {
  test('fn: datesDiffDays( objdate1, objdate2 )', () => {
    expect(datesDiffDays(dateObjBySql('2021-12-25')!, dateObjBySql('2022-01-05')!)).toBe(11);
  });

  test('fn: datesDiffDays( objdate2, objdate1 )', () => {
    expect(datesDiffDays(dateObjBySql('2022-01-05')!, dateObjBySql('2021-12-25')!)).toBe(11);
  });

  test('fn: datesDiffDays( date2, date1 )', () => {
    expect(datesDiffDays(new Date('2022-01-05'), new Date('2021-12-25'))).toBe(11);
  });
});
