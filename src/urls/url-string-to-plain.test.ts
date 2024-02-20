import { urlStringToPlain } from './url-string-to-plain';

describe('fn: urlStringToPlain', () => {
  test('fn: urlStringToPlain( url bad )', () => {
    expect(urlStringToPlain('example.com?name=chacho tio&suma=1+2')).toBe(
      'example.com?name%3dchacho%20tio&suma%3d1+2',
    );
  });

  test('fn: urlStringToPlain( url )', () => {
    expect(urlStringToPlain('https://example.com?name=chacho tio&suma=1+2')).toBe(
      'https://example.com?name%3dchacho%20tio&suma%3d1+2',
    );
  });
});
