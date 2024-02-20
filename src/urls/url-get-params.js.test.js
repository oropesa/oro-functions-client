import { urlGetParams } from './url-get-params';

describe('fn: urlGetParams', () => {
  test('fn: urlGetParams( undefined )', () => {
    expect(urlGetParams()).toEqual({});
  });
});
