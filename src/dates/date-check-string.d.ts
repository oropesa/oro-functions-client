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

export type dateCheckString = ( str: string, format?: DateStringFormat ) => boolean;