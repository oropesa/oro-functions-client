import { DateObj } from './date-obj-by-date';

export type dateObjByTimestamp = ( timestamp: number, opts?: { sep: string } | string ) => DateObj | null;