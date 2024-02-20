import { sanitizePath } from './sanitize-path';

describe('fn: sanitizePath', () => {
  test('fn: sanitizePath( path windows )', () => {
    expect(sanitizePath('C:\\tmp\\chacho.pdf')).toBe('C:/tmp/chacho.pdf');
  });

  test('fn: sanitizePath( path linux )', () => {
    expect(sanitizePath('/tmp/chacho.pdf')).toBe('/tmp/chacho.pdf');
  });

  test('fn: sanitizePath( path windows external )', () => {
    expect(sanitizePath('\\\\tmp\\chacho.pdf')).toBe('\\\\tmp/chacho.pdf');
  });
});
