import { urlDecode } from './url-decode';

describe('fn: urlDecode', () => {
  test('fn: urlDecode( url bad )', () => {
    expect(urlDecode('example.com%3Fname%3Dchacho%20tio%26suma%3D1%2B2')).toBe('example.com?name=chacho tio&suma=1+2');
  });

  test('fn: urlDecode( url )', () => {
    expect(urlDecode('https%3A%2F%2Fexample.com%3Fname%3Dchacho%20tio%26suma%3D1%2B2')).toBe(
      'https://example.com?name=chacho tio&suma=1+2',
    );
  });
});
