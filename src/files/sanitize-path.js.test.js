import { sanitizePath } from './sanitize-path';

describe('fn: sanitizePath', () => {
  test('fn: sanitizePath( undefined )', () => {
    expect(sanitizePath()).toBe('');
  });
});
