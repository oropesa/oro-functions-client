import { isString, isObject } from '../general';
import { dateObjByDate } from './date-obj-by-date';
import type { DateObj, DateObjOptions } from './date-obj-by-date';

export function dateObjByToday(options: DateObjOptions | string = {}): DateObj {
  let optionsObj = options;
  isString(optionsObj) && (optionsObj = { sep: optionsObj });
  !isObject(optionsObj) && (optionsObj = { sep: '/' });
  !isString(optionsObj.sep) && (optionsObj.sep = '/');
  return dateObjByDate(new Date(), optionsObj);
}
