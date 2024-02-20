import { sanitizeFilename } from './sanitize-filename';

describe('fn: sanitizeFilename', () => {
  test('fn: sanitizeFilename( str )', () => {
    expect(sanitizeFilename('ÁËÌÒÑ.pdf')).toBe('AEION.pdf');
  });

  test('fn: sanitizeFilename( str2 )', () => {
    expect(sanitizeFilename('<Æ>Ø:')).toBe('-AE-O-');
  });

  test('fn: sanitizeFilename( path )', () => {
    expect(sanitizeFilename('C:/tmp/ÁËÌÒÑ.pdf')).toBe('AEION.pdf');
  });
});
