import { getFilenameExtByName } from './get-filename-ext-by-name';

describe('fn: getFilenameExtByName', () => {
  test('fn: getFilenameExtByName( undefined )', () => {
    expect(getFilenameExtByName()).toBe('');
  });
});
