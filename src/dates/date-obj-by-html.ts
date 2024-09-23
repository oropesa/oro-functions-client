import { REGEXP_DATETIME_FN } from 'oro-regexp';

import { isObject, isString } from '../general';
import { dateObjByDate } from './date-obj-by-date';
import type { DateObj, DateObjOptions } from './date-obj-by-date';

export function dateObjByHtml(html: string, options: DateObjOptions | string = {}): DateObj | null {
  if (!isString(html)) {
    return null;
  }

  let optionsObj = options;
  if (isString(optionsObj)) {
    optionsObj = { sep: optionsObj };
  }
  if (!isObject(optionsObj)) {
    optionsObj = { sep: '/' };
  }
  if (!isString(optionsObj.sep)) {
    optionsObj.sep = '/';
  }

  if (!REGEXP_DATETIME_FN(optionsObj.sep).test(html.trim())) {
    return null;
  }

  const array = html.trim().split(optionsObj.sep);
  const yearhours = array[2].split(' ');
  let sqldate = `${yearhours[0]}-${array[1]}-${array[0]}`;
  if (yearhours.length > 1) {
    sqldate += ` ${yearhours[1]}`;
  }

  return dateObjByDate(new Date(sqldate), optionsObj);
}
