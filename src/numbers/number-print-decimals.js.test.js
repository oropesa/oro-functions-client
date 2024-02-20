import { numberPrintDecimals } from './number-print-decimals';

describe('fn: numberPrintDecimals', () => {
  test('fn: numberPrintDecimals()', () => {
    expect(numberPrintDecimals()).toBe('');
  });

  test('fn: numberPrintDecimals( bool )', () => {
    expect(numberPrintDecimals(true)).toBe('true');
  });
});
