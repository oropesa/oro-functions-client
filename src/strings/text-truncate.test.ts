import { textTruncate } from './text-truncate';

describe('fn: textTruncate', () => {
  test('fn: textTruncate( str short )', () => {
    expect(textTruncate('chacho loco')).toBe('chacho loco');
  });

  test('fn: textTruncate( str long, max min )', () => {
    expect(textTruncate('chacho loco', 2)).toBe('..');
  });

  test('fn: textTruncate( str long, max short )', () => {
    expect(textTruncate('chacho loco', 6)).toBe('cha...');
  });

  test('fn: textTruncate( str long, max )', () => {
    expect(textTruncate('chacho loco', 9)).toBe('chacho...');
  });

  test('fn: textTruncate( str long, max2 )', () => {
    expect(textTruncate('chacho loco', 10)).toBe('chacho...');
  });

  test('fn: textTruncate( str long, max2, suf )', () => {
    expect(textTruncate('chacho loco', 10, ' =)')).toBe('chacho =)');
  });

  test('fn: textTruncate( str long, max2, suf null )', () => {
    expect(textTruncate('chacho loco', 10, '')).toBe('chacho');
  });
});
