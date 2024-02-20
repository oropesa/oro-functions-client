import { urlGetHostByReq } from './url-get-host-by-req';

describe('fn: urlGetHostByReq', () => {
  test('fn: urlGetHostByReq( undefined )', () => {
    expect(urlGetHostByReq()).toBe('');
  });

  test('fn: urlGetHostByReq( req bad )', () => {
    expect(urlGetHostByReq('chacho')).toBe('');
  });
});
