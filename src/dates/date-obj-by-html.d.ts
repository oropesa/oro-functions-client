import { DateObj } from './date-obj-by-date';

export type dateObjByHtml = ( html: string, opts?: { sep: string } | string ) => DateObj | null;