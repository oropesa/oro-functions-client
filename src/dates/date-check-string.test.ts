import { dateCheckString } from './date-check-string';

describe('fn: dateCheckString', () => {
  test('fn: dateCheckString( str bad )', () => {
    expect(dateCheckString('30/12/2020')).toBe(false);
  });

  test('fn: dateCheckString( str )', () => {
    expect(dateCheckString('30-12-2020')).toBe(true);
  });

  test('fn: dateCheckString( str, default )', () => {
    expect(dateCheckString('30-12-2020', 'default')).toBe(true);
  });

  test('fn: dateCheckString( str, date_default )', () => {
    expect(dateCheckString('30-12-2020', 'date_default')).toBe(true);
  });

  test('fn: dateCheckString( str, sql )', () => {
    expect(dateCheckString('2020-12-30', 'sql')).toBe(true);
  });

  test('fn: dateCheckString( str, date_sql )', () => {
    expect(dateCheckString('2020-12-30', 'date_sql')).toBe(true);
  });

  test('fn: dateCheckString( str, html )', () => {
    expect(dateCheckString('30/12/2020', 'html')).toBe(true);
  });

  test('fn: dateCheckString( str, date_html )', () => {
    expect(dateCheckString('30/12/2020', 'date_html')).toBe(true);
  });

  test('fn: dateCheckString( str, datetime_sql )', () => {
    expect(dateCheckString('2020-12-30 11:59:59', 'datetime_sql')).toBe(true);
  });

  test('fn: dateCheckString( str, datetime_html )', () => {
    expect(dateCheckString('30/12/2020 11:59:59', 'datetime_html')).toBe(true);
  });

  test('fn: dateCheckString( str, datetime_default )', () => {
    expect(dateCheckString('30-12-2020 11:59:59', 'datetime_default')).toBe(true);
  });

  test('fn: dateCheckString( str, datetime )', () => {
    expect(dateCheckString('30-12-2020 11:59:59', 'datetime')).toBe(true);
  });

  test('fn: dateCheckString( str, datetime_sql_strict )', () => {
    expect(dateCheckString('2020-12-30 11:59:59', 'datetime_sql_strict')).toBe(true);
  });

  test('fn: dateCheckString( str, datetime_html_strict )', () => {
    expect(dateCheckString('30/12/2020 11:59:59', 'datetime_html_strict')).toBe(true);
  });

  test('fn: dateCheckString( str, datetime_default_strict )', () => {
    expect(dateCheckString('30-12-2020 11:59:59', 'datetime_default_strict')).toBe(true);
  });

  test('fn: dateCheckString( str, datetime_strict )', () => {
    expect(dateCheckString('30-12-2020 11:59:59', 'datetime_strict')).toBe(true);
  });
});
