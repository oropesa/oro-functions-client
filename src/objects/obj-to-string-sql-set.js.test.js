import { objToStringSqlSet } from './obj-to-string-sql-set';

describe('fn: objToStringSqlSet', () => {
  test('fn: objToStringSqlSet( undefined )', () => {
    expect(objToStringSqlSet()).toBe('');
  });

  test('fn: objToStringSqlSet( str )', () => {
    expect(objToStringSqlSet('chacho')).toBe('');
  });
});
