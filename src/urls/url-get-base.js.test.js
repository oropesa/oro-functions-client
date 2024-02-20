import { urlGetBase } from './url-get-base';

describe('fn: urlGetBase', () => {
  test('fn: urlGetBase( undefined )', () => {
    expect(urlGetBase()).toBe('');
  });
});
