import { REGEXP_DATETIME_SQL } from 'oro-regexp';

import { isObject, isString } from '../general';
import { dateObjByDate } from './date-obj-by-date';
import type { DateObj, DateObjOptions } from './date-obj-by-date';

export function dateObjBySql(sqldate: string, options: DateObjOptions | string = {}): DateObj | null {
  if (!isString(sqldate)) {
    return null;
  }
  if (!REGEXP_DATETIME_SQL.test(sqldate)) {
    return null;
  }

  let optionsObj = options;
  isString(optionsObj) && (optionsObj = { sep: optionsObj });
  !isObject(optionsObj) && (optionsObj = { sep: '/' });
  !isString(optionsObj.sep) && (optionsObj.sep = '/');
  return dateObjByDate(new Date(sqldate), optionsObj);
}
