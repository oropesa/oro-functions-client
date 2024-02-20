import { splitStringNumber } from './split-string-number';

describe('fn: splitStringNumber', () => {
  test('fn: splitStringNumber( undefined )', () => {
    expect(splitStringNumber()).toEqual([]);
  });

  test('fn: splitStringNumber( number, 4 )', () => {
    expect(splitStringNumber(123456, 4)).toEqual(['123', '56']);
  });
});
