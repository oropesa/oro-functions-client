import { getFilenameExtByName } from './get-filename-ext-by-name';

describe('fn: getFilenameExtByName', () => {
  test('fn: getFilenameExtByName( str )', () => {
    expect(getFilenameExtByName('chacho.pdf')).toBe('pdf');
  });

  test('fn: getFilenameExtByName( str w/o dot )', () => {
    expect(getFilenameExtByName('chacho')).toBe('');
  });

  test('fn: getFilenameExtByName( path )', () => {
    expect(getFilenameExtByName('C:/tmp/.htaccess')).toBe('htaccess');
  });
});
