import { getFolderByPath } from './get-folder-by-path';

describe('fn: getFolderByPath', () => {
  test('fn: getFolderByPath( undefined )', () => {
    expect(getFolderByPath()).toBe('');
  });
});
