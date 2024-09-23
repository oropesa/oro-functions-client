import { isNumber, isObject, isString } from '../general';
import { isNumeric } from '../numbers';
import { dateObjByDate } from './date-obj-by-date';
import type { DateObj, DateObjOptions } from './date-obj-by-date';

export function dateObjByTimestamp(timestamp: number, options: DateObjOptions | string = {}): DateObj | null {
  if (!isNumber(timestamp) || !isNumeric(timestamp)) {
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
  return dateObjByDate(new Date(timestamp), optionsObj);
}
