import { isDate } from '../general';
import type { DateObj } from './date-obj-by-date';

export function isDateObj(date: any): date is DateObj {
  return !!date && isDate(date.jsdate);
}

// @deprecated
export function dateIsObj(date: any): date is DateObj {
  return isDateObj(date);
}
