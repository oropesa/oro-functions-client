import { isObject, isString, type } from '../general';

export interface DateObjOptions {
  sep?: string;
}

export interface DateObj {
  iso: string;
  sep: string;
  local: string;
  year: string;
  month: string;
  day: string;
  hour: string;
  minute: string;
  second: string;
  time: string;
  times: string;
  date: string;
  datetime: string;
  datetimes: string;
  sqldate: string;
  sqldatetime: string;
  sqldatetimeIso: string;
  fulldate: string;
  fulldateStart: string;
  fulldateEnd: string;
  weekday: number;
  monthdays: number;
  timestamp: number;
  jsdate: Date;
}

export function dateObjByDate(date: Date, options: DateObjOptions | string = {}): DateObj {
  if (type(date) !== 'date') {
    return null as unknown as DateObj;
  }

  const dateObj: Partial<DateObj> = {};
  dateObj.iso = date.toISOString();

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

  dateObj.sep = optionsObj.sep;

  const localData = new Date(date);
  localData.setHours(localData.getHours() + date.getTimezoneOffset() / -60);
  dateObj.local = localData.toISOString();

  const dateArray = dateObj.local.split(/\D/).slice(0, -1);
  // dateArr = [ year, month, day, hour, minute, second, millisecond ]

  dateObj.year = dateArray[0];
  dateObj.month = dateArray[1];
  dateObj.day = dateArray[2];
  dateObj.hour = dateArray[3];
  dateObj.minute = dateArray[4];
  dateObj.second = dateArray[5];

  dateObj.time = `${dateObj.hour}:${dateObj.minute}`;
  dateObj.times = `${dateObj.hour}:${dateObj.minute}:${dateObj.second}`;

  dateObj.date = `${dateObj.day}${dateObj.sep}${dateObj.month}${dateObj.sep}${dateObj.year}`;
  dateObj.datetime = `${dateObj.date} ${dateObj.time}`;
  dateObj.datetimes = `${dateObj.date} ${dateObj.times}`;

  dateObj.sqldate = `${dateObj.year}-${dateObj.month}-${dateObj.day}`;
  dateObj.sqldatetime = `${dateObj.sqldate} ${dateObj.times}`;
  dateObj.sqldatetimeIso = dateObj.iso.replace('T', ' ').slice(0, 19);

  dateObj.fulldate = `${dateObj.date} ${dateObj.times}`;
  dateObj.fulldateStart = `${dateObj.date} 00:00:00`;
  dateObj.fulldateEnd = `${dateObj.date} 23:59:59`;

  dateObj.weekday = [7, 1, 2, 3, 4, 5, 6][date.getDay()];
  dateObj.monthdays = new Date(Number(dateObj.year), Number(dateObj.month), 0).getDate();
  dateObj.timestamp = date.getTime();

  dateObj.jsdate = new Date(date);
  return dateObj as DateObj;
}
