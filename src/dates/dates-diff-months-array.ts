import { isDate } from '../general';
import type { DateObj } from './date-obj-by-date';
import { datesCompare } from './dates-compare';
import { isDateObj } from './is-date-obj';

export interface DateDiffMonth {
  year: string;
  month: string;
}

export function datesDiffMonthsArray(date1: DateObj | Date, date2: DateObj | Date): DateDiffMonth[] {
  if (!isDate(date1) && !isDateObj(date1)) {
    return [];
  }
  if (!isDate(date2) && !isDateObj(date2)) {
    return [];
  }

  let dateStart = new Date(isDateObj(date1) ? date1.jsdate : date1);
  let dateEnd = new Date(isDateObj(date2) ? date2.jsdate : date2);
  dateEnd < dateStart && ([dateEnd, dateStart] = [dateStart, dateEnd]);

  dateStart = new Date(dateStart.getFullYear(), dateStart.getMonth(), dateStart.getDate());
  dateEnd = new Date(dateEnd.getFullYear(), dateEnd.getMonth(), dateEnd.getDate());

  if (datesCompare(dateStart, dateEnd) === 0) {
    return [];
  }

  dateStart = new Date(dateStart.getFullYear(), dateStart.getMonth(), 1);
  dateEnd = new Date(dateEnd.getFullYear(), dateEnd.getMonth(), 1);

  const monthsArray: DateDiffMonth[] = [];
  while (true) {
    monthsArray.push({
      year: String(dateStart.getFullYear()),
      month: ('0' + (dateStart.getMonth() + 1)).slice(-2),
    });

    const monthCompared = datesCompare(dateStart, dateEnd);
    if (monthCompared <= 0) {
      break;
    }

    dateStart.setMonth(dateStart.getMonth() + 1);
  }

  return monthsArray;
}
