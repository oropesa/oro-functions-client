import { DateObj } from './date-obj-by-date';

export type dateObjPlusDays = ( date: DateObj | Date, days: number ) => DateObj | null;