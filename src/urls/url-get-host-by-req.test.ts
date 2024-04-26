import { req } from './_request.mocks';
import { urlGetHostByReq } from './url-get-host-by-req';

describe('fn: urlGetHostByReq', () => {
  test('fn: urlGetHostByReq( req )', () => {
    expect(urlGetHostByReq(req)).toBe('https://example.com');
  });
});
