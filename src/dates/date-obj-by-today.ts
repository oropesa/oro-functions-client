import { isObject, isString } from '../general';
import { dateObjByDate } from './date-obj-by-date';
import type { DateObj, DateObjOptions } from './date-obj-by-date';

export function dateObjByToday(options: DateObjOptions | string = {}): DateObj {
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

  return dateObjByDate(new Date(), optionsObj);
}
