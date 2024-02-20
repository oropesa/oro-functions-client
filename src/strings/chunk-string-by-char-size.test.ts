import { chunkStringByCharSize } from './chunk-string-by-char-size';

describe('fn: chunkStringByCharSize', () => {
  test('fn: chunkStringByCharSize( str, char, size )', () => {
    expect(chunkStringByCharSize('chacho', '|', 4)).toBe('chac|ho');
  });

  test('fn: chunkStringByCharSize( str, char, size limit )', () => {
    expect(chunkStringByCharSize('chacho', '|', 3)).toBe('cha|cho');
  });

  test('fn: chunkStringByCharSize( str, char2, size )', () => {
    expect(chunkStringByCharSize('chacho', '=)', 4)).toBe('chac=)ho');
  });

  test('fn: chunkStringByCharSize( str, char, size, right )', () => {
    expect(chunkStringByCharSize('chacho', '|', 3, 'right')).toBe('cha|cho');
  });

  test('fn: chunkStringByCharSize( str, char, size2, right )', () => {
    expect(chunkStringByCharSize('chacho', '|', 4, 'right')).toBe('ch|acho');
  });

  test('fn: chunkStringByCharSize( str, char2, size, right )', () => {
    expect(chunkStringByCharSize('chacho', '=)', 4, 'right')).toBe('ch=)acho');
  });
});
