import { urlGetCurrentByReq } from './url-get-current-by-req';

describe('fn: urlGetCurrentByReq', () => {
  test('fn: urlGetCurrentByReq( undefined )', () => {
    expect(urlGetCurrentByReq()).toBe('');
  });

  test('fn: urlGetCurrentByReq( req bad )', () => {
    expect(urlGetCurrentByReq('chacho')).toBe('');
  });
});
