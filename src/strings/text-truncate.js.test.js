import { textTruncate } from './text-truncate';

describe('fn: textTruncate', () => {
  test('fn: textTruncate( undefined )', () => {
    expect(textTruncate()).toBe('');
  });

  test('fn: textTruncate( null )', () => {
    expect(textTruncate(null)).toBe('');
  });

  test('fn: textTruncate( bool )', () => {
    expect(textTruncate(true)).toBe('');
  });

  test('fn: textTruncate( int )', () => {
    expect(textTruncate(17)).toBe('17');
  });

  test('fn: textTruncate( str long, max bad )', () => {
    expect(textTruncate('chacho loco', 'tio')).toBe('chacho loco');
  });

  test('fn: textTruncate( str long, max true )', () => {
    expect(textTruncate('chacho loco', true)).toBe('chacho loco');
  });

  test('fn: textTruncate( str long, max2, suf null )', () => {
    expect(textTruncate('chacho loco', 10, null)).toBe('chacho...');
  });
});
