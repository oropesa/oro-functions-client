import { isDate } from '../general';
import { isNumeric } from '../numbers';
import { dateObjByDate } from './date-obj-by-date';
import type { DateObj } from './date-obj-by-date';
import { isDateObj } from './is-date-obj';

export function dateObjPlusDays(date: DateObj | Date, days: number): DateObj {
  if (!isDate(date) && !isDateObj(date)) {
    return null as unknown as DateObj;
  }

  const plusDays = isNumeric(days) ? Number(days) : 0;

  const jsdate = new Date(isDateObj(date) ? date.jsdate : date);
  jsdate.setDate(jsdate.getDate() + plusDays);

  return dateObjByDate(jsdate, isDateObj(date) ? date : { sep: '/' });
}
