import { isDate } from '../general';
import { isNumeric } from '../numbers';
import { isDateObj } from './is-date-obj';
import { dateObjByDate } from './date-obj-by-date';
import type { DateObj } from './date-obj-by-date';

export function dateObjPlusDays(date: DateObj | Date, days: number): DateObj {
  if (!isDate(date) && !isDateObj(date)) {
    return null as unknown as DateObj;
  }

  const plusDays = isNumeric(days) ? Number(days) : 0;

  let jsdate = new Date(isDateObj(date) ? date.jsdate : date);
  jsdate.setDate(jsdate.getDate() + plusDays);

  return dateObjByDate(jsdate, isDateObj(date) ? date : { sep: '/' });
}
