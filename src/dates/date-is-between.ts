import { isDate } from '../general';
import type { DateObj } from './date-obj-by-date';
import { isDateObj } from './is-date-obj';

export function dateIsBetween(date: DateObj | Date, dateMin: DateObj | Date, dateMax: DateObj | Date): boolean {
  if (!isDate(date) && !isDateObj(date)) {
    return false;
  }
  if (!isDate(dateMin) && !isDateObj(dateMin)) {
    return false;
  }
  if (!isDate(dateMax) && !isDateObj(dateMax)) {
    return false;
  }

  const timestampDate = isDateObj(date) ? date.timestamp : date.getTime();
  const timestampMin = isDateObj(dateMin) ? dateMin.timestamp : dateMin.getTime();
  const timestampMax = isDateObj(dateMax) ? dateMax.timestamp : dateMax.getTime();

  return timestampDate >= timestampMin && timestampDate <= timestampMax;
}
