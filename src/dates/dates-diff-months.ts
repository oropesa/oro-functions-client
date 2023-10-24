import { isDate } from '../general';
import { isDateObj } from './is-date-obj';
import type { DateObj } from './date-obj-by-date';

export function datesDiffMonths(date1: DateObj | Date, date2: DateObj | Date): number {
  if (!isDate(date1) && !isDateObj(date1)) {
    return 0;
  }
  if (!isDate(date2) && !isDateObj(date2)) {
    return 0;
  }

  const year1 = isDateObj(date1) ? Number(date1.year) : date1.getFullYear();
  const month1 = isDateObj(date1) ? Number(date1.month) : date1.getMonth();
  const year2 = isDateObj(date2) ? Number(date2.year) : date2.getFullYear();
  const month2 = isDateObj(date2) ? Number(date2.month) : date2.getMonth();

  return Math.abs((year2 - year1) * 12 + month2 - month1);
}
