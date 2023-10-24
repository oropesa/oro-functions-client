import { isNumeric } from '../numbers';
import { dateObjByDate } from './date-obj-by-date';
import { isNumber, isString, isObject } from '../general';
import type { DateObj, DateObjOptions } from './date-obj-by-date';

export function dateObjByTimestamp(
  timestamp: number,
  options: DateObjOptions | string = {},
): DateObj | null {
  if (!isNumber(timestamp) || !isNumeric(timestamp)) {
    return null;
  }

  let optionsObj = options;
  isString(optionsObj) && (optionsObj = { sep: optionsObj });
  !isObject(optionsObj) && (optionsObj = { sep: '/' });
  !isString(optionsObj.sep) && (optionsObj.sep = '/');
  return dateObjByDate(new Date(timestamp), optionsObj);
}
