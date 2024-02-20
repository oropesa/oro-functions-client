import { urlEncode } from './url-encode';

describe('fn: urlEncode', () => {
  test('fn: urlEncode( url bad )', () => {
    expect(urlEncode('example.com?name=chacho tio&suma=1+2')).toBe('example.com%3Fname%3Dchacho%20tio%26suma%3D1%2B2');
  });

  test('fn: urlEncode( url )', () => {
    expect(urlEncode('https://example.com?name=chacho tio&suma=1+2')).toBe(
      'https%3A%2F%2Fexample.com%3Fname%3Dchacho%20tio%26suma%3D1%2B2',
    );
  });
});
