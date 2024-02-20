import { chunkStringByCharSize } from './chunk-string-by-char-size';

describe('fn: chunkStringByCharSize', () => {
  test('fn: chunkStringByCharSize( undefined )', () => {
    expect(chunkStringByCharSize()).toBe('');
  });

  test('fn: chunkStringByCharSize( str )', () => {
    expect(chunkStringByCharSize('chacho')).toBe('chacho');
  });

  test('fn: chunkStringByCharSize( str, null, 2 )', () => {
    expect(chunkStringByCharSize('chacho', null, 2)).toBe('chacho');
  });

  test('fn: chunkStringByCharSize( str, char )', () => {
    expect(chunkStringByCharSize('chacho', '|')).toBe('chacho');
  });

  test('fn: chunkStringByCharSize( str, char, size bad )', () => {
    expect(chunkStringByCharSize('chacho', '|', true)).toBe('chacho');
  });
});
