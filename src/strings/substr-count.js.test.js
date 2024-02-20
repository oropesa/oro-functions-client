import { substrCount } from './substr-count';

describe('fn: substrCount', () => {
  test('fn: substrCount( undefined )', () => {
    expect(substrCount()).toBe(0);
  });

  test('fn: substrCount( str )', () => {
    expect(substrCount('chacho111')).toBe(0);
  });

  test('fn: substrCount( number )', () => {
    expect(substrCount(121, 1)).toBe(2);
  });

  test('fn: substrCount( bool, number )', () => {
    expect(substrCount(true, 1)).toBe(0);
  });

  test('fn: substrCount( str empty, number )', () => {
    expect(substrCount('', 1)).toBe(0);
  });
});
