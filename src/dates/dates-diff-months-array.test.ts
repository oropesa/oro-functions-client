import { dateObjBySql } from './date-obj-by-sql';
import { datesDiffMonthsArray } from './dates-diff-months-array';

describe('fn: datesDiffMonthsArray', () => {
  test('fn: datesDiffMonthsArray( objdate1, objdate2 )', () => {
    expect(datesDiffMonthsArray(dateObjBySql('2021-12-25')!, dateObjBySql('2022-01-05')!)).toEqual([
      { year: '2021', month: '12' },
      { year: '2022', month: '01' },
    ]);
  });

  test('fn: datesDiffMonthsArray( objdate2, objdate1 )', () => {
    expect(datesDiffMonthsArray(dateObjBySql('2022-01-05')!, dateObjBySql('2021-12-25')!)).toEqual([
      { year: '2021', month: '12' },
      { year: '2022', month: '01' },
    ]);
  });

  test('fn: datesDiffMonthsArray( date1, date2 )', () => {
    expect(datesDiffMonthsArray(new Date('2021-12-25'), new Date('2022-01-05'))).toEqual([
      { year: '2021', month: '12' },
      { year: '2022', month: '01' },
    ]);
  });

  test('fn: datesDiffMonthsArray( date1, date2 ) months', () => {
    expect(datesDiffMonthsArray(new Date('2021-10-25'), new Date('2021-12-05'))).toEqual([
      { year: '2021', month: '10' },
      { year: '2021', month: '11' },
      { year: '2021', month: '12' },
    ]);
  });

  test('fn: datesDiffMonthsArray( date1, date1 )', () => {
    expect(datesDiffMonthsArray(new Date('2021-10-25'), new Date('2021-10-25'))).toEqual([]);
  });
});
