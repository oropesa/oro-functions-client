import { dateObjBySql } from './date-obj-by-sql';
import { datesDiffMonths } from './dates-diff-months';

describe('fn: datesDiffMonths', () => {
  test('fn: datesDiffMonths( objdate1, objdate2 )', () => {
    expect(datesDiffMonths(dateObjBySql('2021-12-25')!, dateObjBySql('2022-01-05')!)).toBe(1);
  });

  test('fn: datesDiffMonths( objdate2, objdate1 )', () => {
    expect(datesDiffMonths(dateObjBySql('2022-01-05')!, dateObjBySql('2021-12-25')!)).toBe(1);
  });

  test('fn: datesDiffMonths( date1, date2 )', () => {
    expect(datesDiffMonths(new Date('2021-12-25'), new Date('2022-01-05'))).toBe(1);
  });
});
