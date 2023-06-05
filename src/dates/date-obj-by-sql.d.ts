import { DateObj } from './date-obj-by-date';

export type dateObjBySql = ( sqldate: string, opts?: { sep: string } | string ) => DateObj | null;