import { sanitizePath } from './sanitize-path';

describe('fn: sanitizePath', () => {
  test('fn: sanitizePath( path windows )', () => {
    // eslint-disable-next-line unicorn/prefer-string-raw
    expect(sanitizePath('C:\\tmp\\chacho.pdf')).toBe('C:/tmp/chacho.pdf');
  });

  test('fn: sanitizePath( path linux )', () => {
    expect(sanitizePath('/tmp/chacho.pdf')).toBe('/tmp/chacho.pdf');
  });

  test('fn: sanitizePath( path windows external )', () => {
    // eslint-disable-next-line unicorn/prefer-string-raw
    expect(sanitizePath('\\\\tmp\\chacho.pdf')).toBe('\\\\tmp/chacho.pdf');
  });
});
