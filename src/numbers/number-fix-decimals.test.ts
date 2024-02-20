import { numberFixDecimals } from './number-fix-decimals';

describe('fn: numberFixDecimals', () => {
  test('fn: numberFixDecimals( str bad )', () => {
    expect(numberFixDecimals('chacho')).toBe('chacho');
  });

  test('fn: numberFixDecimals( str empty )', () => {
    expect(numberFixDecimals('')).toBe('');
  });

  test('fn: numberFixDecimals( str bad comma )', () => {
    expect(numberFixDecimals('1,2,3')).toBe('1,2,3');
  });

  test('fn: numberFixDecimals( str ok comma )', () => {
    expect(numberFixDecimals('2,1499')).toBe('2.15');
  });

  test('fn: numberFixDecimals( str ok )', () => {
    expect(numberFixDecimals('2.1499')).toBe('2.15');
  });

  test('fn: numberFixDecimals( float )', () => {
    expect(numberFixDecimals(12.5)).toBe('12.50');
  });

  test('fn: numberFixDecimals( float long )', () => {
    expect(numberFixDecimals(12.4996)).toBe('12.50');
  });

  test('fn: numberFixDecimals( float, 0 )', () => {
    expect(numberFixDecimals('2.1499', 0)).toBe('2');
  });

  test('fn: numberFixDecimals( float, len neg )', () => {
    expect(numberFixDecimals('2.1499', -3)).toBe('2');
  });

  test('fn: numberFixDecimals( float, len 3 )', () => {
    expect(numberFixDecimals('2.1499', 3)).toBe('2.150');
  });

  test('fn: numberFixDecimals( float, len 6 )', () => {
    expect(numberFixDecimals('2.1499', 6)).toBe('2.149900');
  });

  test('fn: numberFixDecimals( float, false )', () => {
    expect(numberFixDecimals('2.1499', false)).toBe('2.1499');
  });

  test('fn: numberFixDecimals( float, false2 )', () => {
    expect(numberFixDecimals('2.1490', false)).toBe('2.1490');
  });

  test('fn: numberFixDecimals( float, len, noz )', () => {
    expect(numberFixDecimals('2.1499', 6, false)).toBe('2.1499');
  });

  test('fn: numberFixDecimals( float, len2, noz )', () => {
    expect(numberFixDecimals('2.1499', 3, false)).toBe('2.15');
  });

  test('fn: numberFixDecimals( float, len, noz, 3 )', () => {
    expect(numberFixDecimals('2.1499', 3, false, 3)).toBe('2.150');
  });

  test('fn: numberFixDecimals( float, len, noz, 2 )', () => {
    expect(numberFixDecimals('2.1387', 3, false, 2)).toBe('2.139');
  });

  test('fn: numberFixDecimals( float1, len, noz, 2 )', () => {
    expect(numberFixDecimals('2.1999', 3, false, 2)).toBe('2.20');
  });

  test('fn: numberFixDecimals( int )', () => {
    expect(numberFixDecimals(12)).toBe('12.00');
  });

  test('fn: numberFixDecimals( int, false )', () => {
    expect(numberFixDecimals(12, false)).toBe('12');
  });

  test('fn: numberFixDecimals( int, 0 )', () => {
    expect(numberFixDecimals(12, 0)).toBe('12');
  });

  test('fn: numberFixDecimals( int, len, noz )', () => {
    expect(numberFixDecimals(12, 2, false)).toBe('12');
  });

  test('fn: numberFixDecimals( int, len, allow )', () => {
    expect(numberFixDecimals(12, 2, true)).toBe('12.00');
  });

  test('fn: numberFixDecimals( int, len, allow, false )', () => {
    expect(numberFixDecimals(12, 2, true, false)).toBe('12');
  });
});
