import { sanitizeFilename } from './sanitize-filename';

describe('fn: sanitizeFilename', () => {
  test('fn: sanitizeFilename( undefined )', () => {
    expect(sanitizeFilename()).toBe('');
  });
});
