import { isDate } from '../general';
import type { DateObj } from './date-obj-by-date';
import { isDateObj } from './is-date-obj';

export function datesDiffDays(date1: DateObj | Date, date2: DateObj | Date): number {
  if (!isDate(date1) && !isDateObj(date1)) {
    return 0;
  }
  if (!isDate(date2) && !isDateObj(date2)) {
    return 0;
  }

  let jsdate1 = isDateObj(date1) ? date1.jsdate : date1;
  let jsdate2 = isDateObj(date2) ? date2.jsdate : date2;

  jsdate2 < jsdate1 && ([jsdate1, jsdate2] = [jsdate2, jsdate1]);

  return Math.ceil((jsdate2.getTime() - jsdate1.getTime()) / (1000 * 60 * 60 * 24));
}
