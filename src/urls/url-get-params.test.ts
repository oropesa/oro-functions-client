import { urlGetParams } from './url-get-params';

describe('fn: urlGetParams', () => {
  test('fn: urlGetParams( url bad )', () => {
    expect(urlGetParams('example.com?chacho&tio=1')).toEqual({});
  });

  test('fn: urlGetParams( url empty )', () => {
    expect(urlGetParams('https://example.com')).toEqual({});
  });

  test('fn: urlGetParams( url )', () => {
    expect(urlGetParams('https://example.com?chacho&tio=1')).toEqual({ chacho: '', tio: '1' });
  });

  test('fn: urlGetParams( url array )', () => {
    expect(urlGetParams('https://example.com?chacho&tio=1&cars=Nissan&cars=Audi')).toEqual({
      chacho: '',
      tio: '1',
      cars: ['Nissan', 'Audi'],
    });
  });

  test('fn: urlGetParams( url array php )', () => {
    expect(urlGetParams('https://example.com?chacho&tio=1&cars[]=Nissan&cars[]=Audi')).toEqual({
      chacho: '',
      tio: '1',
      cars: ['Nissan', 'Audi'],
    });
  });

  test('fn: urlGetParams( query )', () => {
    expect(urlGetParams('chacho&tio=1')).toEqual({ chacho: '', tio: '1' });
  });
});
