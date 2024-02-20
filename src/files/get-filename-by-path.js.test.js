import { getFilenameByPath } from './get-filename-by-path';

describe('fn: getFilenameByPath', () => {
  test('fn: getFilenameByPath( undefined )', () => {
    expect(getFilenameByPath()).toBe('');
  });
});
