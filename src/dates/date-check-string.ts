import { REGEXP } from 'oro-regexp';

import { isString } from '../general';

export type DateStringFormat =
  | 'datetime_strict'
  | 'datetime_default_strict'
  | 'datetime_html_strict'
  | 'datetime_sql_strict'
  | 'datetime'
  | 'datetime_default'
  | 'datetime_html'
  | 'datetime_sql'
  | 'html'
  | 'date_html'
  | 'sql'
  | 'date_sql'
  | 'default'
  | 'date_default';

export function dateCheckString(str: string, format: DateStringFormat = 'default'): boolean {
  if (!isString(str)) {
    return false;
  }

  let regexp;
  switch (format) {
    case 'datetime_strict':
    case 'datetime_default_strict':
      regexp = REGEXP.DATETIME_DEFAULT_STRICT;
      break; // 30-12-2020 11:59[:59]

    case 'datetime_html_strict':
      regexp = REGEXP.DATETIME_HTML_STRICT;
      break; // 30/12/2020 11:59[:59]

    case 'datetime_sql_strict':
      regexp = REGEXP.DATETIME_SQL_STRICT;
      break; // 2020-12-30 11:59[:59]

    case 'datetime':
    case 'datetime_default':
      regexp = REGEXP.DATETIME_DEFAULT;
      break; // 30-12-2020 [11:59[:59]]

    case 'datetime_html':
      regexp = REGEXP.DATETIME_HTML;
      break; // 30/12/2020 [11:59[:59]]

    case 'datetime_sql':
      regexp = REGEXP.DATETIME_SQL;
      break; // 2020-12-30 [11:59[:59]]

    case 'html':
    case 'date_html':
      regexp = REGEXP.DATE_HTML;
      break; // 30/12/2020

    case 'sql':
    case 'date_sql':
      regexp = REGEXP.DATE_SQL;
      break; // 2020-12-30

    // case 'default':
    // case 'date_default':
    default: // 30-12-2020
      regexp = REGEXP.DATE_DEFAULT;
  }

  return regexp.test(str);
}
