import { DateObj } from './date-obj-by-date';

export type dateIsBetween = ( date: DateObj | Date, dateMin: DateObj | Date, dateMax: DateObj | Date ) => boolean;