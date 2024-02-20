import { getFolderByPath } from './get-folder-by-path';

describe('fn: getFolderByPath', () => {
  test('fn: getFolderByPath( str )', () => {
    expect(getFolderByPath('chacho.pdf')).toBe('');
  });

  test('fn: getFolderByPath( path )', () => {
    expect(getFolderByPath('C:/tmp/chacho.pdf')).toBe('C:/tmp');
  });

  test('fn: getFolderByPath( path, 2 )', () => {
    expect(getFolderByPath('C:/tmp/chacho.pdf', 2)).toBe('C:');
  });

  test('fn: getFolderByPath( path linux )', () => {
    expect(getFolderByPath('/home/tmp/chacho.pdf')).toBe('/home/tmp');
  });

  test('fn: getFolderByPath( path linux, 2 )', () => {
    expect(getFolderByPath('/home/tmp/chacho.pdf', 2)).toBe('/home');
  });

  test('fn: getFolderByPath( path, 5 )', () => {
    expect(getFolderByPath('C:/tmp/chacho.pdf', 5)).toBe('');
  });

  test('fn: getFolderByPath( path, negative-deep )', () => {
    expect(getFolderByPath('C:/tmp/chacho.pdf', -5)).toBe('C:/tmp');
  });

  test('fn: getFolderByPath( path, nan-deep )', () => {
    expect(getFolderByPath('C:/tmp/chacho.pdf', Number.NaN)).toBe('C:/tmp');
  });

  test('fn: getFolderByPath( path relative )', () => {
    expect(getFolderByPath('./tmp/chacho.pdf')).toBe('./tmp');
  });

  test('fn: getFolderByPath( path relative folder )', () => {
    expect(getFolderByPath('./tmp/chacho/')).toBe('./tmp');
  });
});
