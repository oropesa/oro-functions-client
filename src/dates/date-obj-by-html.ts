import { isString, isObject } from '../general';
import { REGEXP_DATETIME_FN } from 'oro-regexp';
import { dateObjByDate } from './date-obj-by-date';
import type { DateObj, DateObjOptions } from './date-obj-by-date';

export function dateObjByHtml(html: string, options: DateObjOptions | string = {}): DateObj | null {
  if (!isString(html)) {
    return null;
  }

  let optionsObj = options;
  isString(optionsObj) && (optionsObj = { sep: optionsObj });
  !isObject(optionsObj) && (optionsObj = { sep: '/' });
  !isString(optionsObj.sep) && (optionsObj.sep = '/');

  if (!REGEXP_DATETIME_FN(optionsObj.sep).test(html)) {
    return null;
  }

  const array = html.trim().split(optionsObj.sep);
  if (array.length !== 3) {
    return null;
  }

  const yearhours = array[2].split(' ');
  let sqldate = `${yearhours[0]}-${array[1]}-${array[0]}`;
  if (yearhours.length > 1) {
    sqldate += ` ${yearhours[1]}`;
  }

  return dateObjByDate(new Date(sqldate), optionsObj);
}
