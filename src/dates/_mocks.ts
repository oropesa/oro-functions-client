import type { DateObj } from './date-obj-by-date';

export const LOCAL_DATE = '2021-08-13 10:57:34';
export const ISO_DATE = new Date(LOCAL_DATE);
// Note 1: date-string as sql-date (`localDate`) is understood as local,
//           so when create `new Date( string )` ISO depends on where tester is globally located
//  For example:
//    - In Gran Canaria (GMT +1): iso would be: '2021-08-13T09:57:34.000Z' - timestamp: 1628848654000
//    - In     A Coruña (GMT +2): iso would be: '2021-08-13T08:57:34.000Z' - timestamp: 1628845054000

export const TIMESTAMP_DATE = ISO_DATE.getTime();
// Note 2: when create `new Date( number )`, timestamp is always understood as ISO

export const DATE_OBJ: DateObj = {
  iso: ISO_DATE.toISOString(),
  local: '2021-08-13T10:57:34.000Z',
  sep: '/',
  year: '2021',
  month: '08',
  day: '13',
  hour: '10',
  minute: '57',
  second: '34',
  time: '10:57',
  times: '10:57:34',
  date: '13/08/2021',
  datetime: '13/08/2021 10:57',
  datetimes: '13/08/2021 10:57:34',
  sqldate: '2021-08-13',
  sqldatetime: '2021-08-13 10:57:34',
  sqldatetimeIso: ISO_DATE.toISOString().replace('T', ' ').slice(0, 19),
  fulldate: '13/08/2021 10:57:34',
  fulldateStart: '13/08/2021 00:00:00',
  fulldateEnd: '13/08/2021 23:59:59',
  weekday: 5,
  monthdays: 31,
  timestamp: ISO_DATE.getTime(),
  jsdate: ISO_DATE,
};

export const DATE_OBJ_CUSTOM_SEP: DateObj = {
  iso: ISO_DATE.toISOString(),
  local: '2021-08-13T10:57:34.000Z',
  sep: '-',
  year: '2021',
  month: '08',
  day: '13',
  hour: '10',
  minute: '57',
  second: '34',
  time: '10:57',
  times: '10:57:34',
  date: '13-08-2021',
  datetime: '13-08-2021 10:57',
  datetimes: '13-08-2021 10:57:34',
  sqldate: '2021-08-13',
  sqldatetime: '2021-08-13 10:57:34',
  sqldatetimeIso: ISO_DATE.toISOString().replace('T', ' ').slice(0, 19),
  fulldate: '13-08-2021 10:57:34',
  fulldateStart: '13-08-2021 00:00:00',
  fulldateEnd: '13-08-2021 23:59:59',
  weekday: 5,
  monthdays: 31,
  timestamp: ISO_DATE.getTime(),
  jsdate: ISO_DATE,
};

//

export const LOCAL_DATE_NO_TIME = '2021-08-13T00:00:00Z';
export const ISO_DATE_NO_TIME = new Date(LOCAL_DATE_NO_TIME);

export const DATE_OBJ_NO_TIME: Partial<DateObj> = {
  iso: ISO_DATE_NO_TIME.toISOString(),
  sep: '/',
  year: '2021',
  month: '08',
  day: '13',
  date: '13/08/2021',
  sqldate: '2021-08-13',
  fulldateStart: '13/08/2021 00:00:00',
  fulldateEnd: '13/08/2021 23:59:59',
  weekday: 5,
  monthdays: 31,
  timestamp: ISO_DATE_NO_TIME.getTime(),
  jsdate: ISO_DATE_NO_TIME,
};
