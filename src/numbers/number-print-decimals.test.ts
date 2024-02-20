import { numberPrintDecimals } from './number-print-decimals';

describe('fn: numberPrintDecimals', () => {
  test('fn: numberPrintDecimals( str bad )', () => {
    expect(numberPrintDecimals('chacho')).toBe('chacho');
  });

  test('fn: numberPrintDecimals( str bad comma )', () => {
    expect(numberPrintDecimals('1.2,3')).toBe('1.2,3');
  });

  test('fn: numberPrintDecimals( str ok )', () => {
    expect(numberPrintDecimals('12.5')).toBe('12,50');
  });

  test('fn: numberPrintDecimals( str ok comma )', () => {
    expect(numberPrintDecimals('12,5')).toBe('12,50');
  });

  test('fn: numberPrintDecimals( float )', () => {
    expect(numberPrintDecimals(12.5)).toBe('12,50');
  });

  test('fn: numberPrintDecimals( float long )', () => {
    expect(numberPrintDecimals(12.4996)).toBe('12,50');
  });

  test('fn: numberPrintDecimals( float, 0 )', () => {
    expect(numberPrintDecimals(12.4996, 0)).toBe('12');
  });

  test('fn: numberPrintDecimals( float, len )', () => {
    expect(numberPrintDecimals(12.4996, 3)).toBe('12,500');
  });

  test('fn: numberPrintDecimals( float, false )', () => {
    expect(numberPrintDecimals(12.4996, false)).toBe('12,4996');
  });

  test('fn: numberPrintDecimals( float, len, noz )', () => {
    expect(numberPrintDecimals(12.4996, 3, false)).toBe('12,50');
  });

  test('fn: numberPrintDecimals( float2, len, noz )', () => {
    expect(numberPrintDecimals(12.4993, 3, false)).toBe('12,499');
  });

  test('fn: numberPrintDecimals( float, len, minz )', () => {
    expect(numberPrintDecimals(12.4996, 3, false, 4)).toBe('12,5000');
  });

  test('fn: numberPrintDecimals( float, -len, minz )', () => {
    expect(numberPrintDecimals(12.4996, -3)).toBe('12');
  });

  test('fn: numberPrintDecimals( float, len, -minz )', () => {
    expect(numberPrintDecimals(12.4996, 3, false, -4)).toBe('12,5');
  });
});
