import { getFilenameWOutExtByName } from './get-filename-wout-ext-by-name';

describe('fn: getFilenameWOutExtByName', () => {
  test('fn: getFilenameWOutExtByName( str )', () => {
    expect(getFilenameWOutExtByName('chacho.pdf')).toBe('chacho');
  });

  test('fn: getFilenameWOutExtByName( str w/o dot )', () => {
    expect(getFilenameWOutExtByName('chacho')).toBe('chacho');
  });

  test('fn: getFilenameWOutExtByName( path )', () => {
    expect(getFilenameWOutExtByName('C:/tmp/.htaccess')).toBe('');
  });
});
