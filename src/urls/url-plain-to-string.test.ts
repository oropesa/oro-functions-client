import { urlPlainToString } from './url-plain-to-string';

describe('fn: urlPlainToString', () => {
  test('fn: urlPlainToString( url bad )', () => {
    expect(urlPlainToString('example.com?name%3dchacho%20tio&suma%3d1+2')).toBe('example.com?name=chacho tio&suma=1+2');
  });

  test('fn: urlPlainToString( url )', () => {
    expect(urlPlainToString('https://example.com?name%3dchacho%20tio&suma%3d1+2')).toBe(
      'https://example.com?name=chacho tio&suma=1+2',
    );
  });
});
