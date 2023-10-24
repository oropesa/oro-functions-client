import { isDate } from '../general';
import { isDateObj } from './is-date-obj';
import { datesCompare } from './dates-compare';
import type { DateObj } from './date-obj-by-date';

export interface DateDiffMonth {
  year: string;
  month: string;
}

export function datesDiffMonthsArray(
  date1: DateObj | Date,
  date2: DateObj | Date,
): DateDiffMonth[] {
  if (!isDate(date1) && !isDateObj(date1)) {
    return [];
  }
  if (!isDate(date2) && !isDateObj(date2)) {
    return [];
  }

  let dateStart = new Date(isDateObj(date1) ? date1.jsdate : date1);
  let dateEnd = new Date(isDateObj(date2) ? date2.jsdate : date2);
  dateStart = new Date(dateStart.getFullYear(), dateStart.getMonth(), 1);
  dateEnd = new Date(dateEnd.getFullYear(), dateEnd.getMonth(), 1);

  dateEnd < dateStart && ([dateEnd, dateStart] = [dateStart, dateEnd]);

  let monthsArray = [];
  while (true) {
    let monthCompared = datesCompare(dateStart, dateEnd);
    if (monthCompared === -1) {
      break;
    }

    let year = String(dateStart.getFullYear());
    let month = ('0' + (dateStart.getMonth() + 1)).slice(-2);

    monthsArray.push({ year: year, month: month });
    if (monthCompared === 0) {
      break;
    }

    dateStart.setDate(dateStart.getDate() + new Date(Number(year), Number(month) + 1, 0).getDate());
  }

  return monthsArray;
}
