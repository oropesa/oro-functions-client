import { splitStringNumber } from './split-string-number';

describe('fn: splitStringNumber', () => {
  test('fn: splitStringNumber( str )', () => {
    expect(splitStringNumber('chacho123')).toEqual(['chacho', '123']);
  });

  test('fn: splitStringNumber( str dot )', () => {
    expect(splitStringNumber('123.456')).toEqual(['123', '.', '456']);
  });

  test('fn: splitStringNumber( str 2 )', () => {
    expect(splitStringNumber('1a234b567')).toEqual(['1', 'a', '234', 'b', '567']);
  });

  test('fn: splitStringNumber( str dot, dot )', () => {
    expect(splitStringNumber('123.456', '.')).toEqual(['123', '456']);
  });

  test('fn: splitStringNumber( str, 4 )', () => {
    expect(splitStringNumber('123456', '4')).toEqual(['123', '56']);
  });

  test('fn: splitStringNumber( str w/o int sep, sep )', () => {
    expect(splitStringNumber('chacho loco', ' ')).toEqual(['chacho', 'loco']);
  });
});
