import { DateObj } from './date-obj-by-date';

interface DateDiffMonth {
    year: string;
    month: string;
}

export type datesDiffMonthsArray = ( date1: DateObj | Date, date2: DateObj | Date ) => DateDiffMonth[];