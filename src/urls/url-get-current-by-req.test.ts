import { req } from './_mocks';
import { urlGetCurrentByReq } from './url-get-current-by-req';

describe('fn: urlGetCurrentByReq', () => {
  test('fn: urlGetCurrentByReq( req )', () => {
    expect(urlGetCurrentByReq(req)).toBe('https://example.com/');
  });

  test('fn: urlGetCurrentByReq( req, false )', () => {
    expect(urlGetCurrentByReq(req, false)).toBe('/');
  });
});
