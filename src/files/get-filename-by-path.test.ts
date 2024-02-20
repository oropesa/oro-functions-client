import { getFilenameByPath } from './get-filename-by-path';

describe('fn: getFilenameByPath', () => {
  test('fn: getFilenameByPath( str )', () => {
    expect(getFilenameByPath('chacho.pdf')).toBe('chacho.pdf');
  });

  test('fn: getFilenameByPath( path )', () => {
    expect(getFilenameByPath('C:/tmp/chacho.pdf')).toBe('chacho.pdf');
  });
});
