import { substrCount } from './substr-count';

describe('fn: substrCount', () => {
  test('fn: substrCount( str, str empty )', () => {
    expect(substrCount('chacho111', '')).toBe(0);
  });

  test('fn: substrCount( str, substr in )', () => {
    expect(substrCount('12131', '1')).toBe(3);
  });

  test('fn: substrCount( str, substr not-in )', () => {
    expect(substrCount('12131', '0')).toBe(0);
  });
});
