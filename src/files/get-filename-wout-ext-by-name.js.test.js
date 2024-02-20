import { getFilenameWOutExtByName } from './get-filename-wout-ext-by-name';

describe('fn: getFilenameWOutExtByName', () => {
  test('fn: getFilenameWOutExtByName( undefined )', () => {
    expect(getFilenameWOutExtByName()).toBe('');
  });
});
