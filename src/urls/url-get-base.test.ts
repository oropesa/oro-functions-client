import { urlGetBase } from './url-get-base';

describe('fn: urlGetBase', () => {
  test('fn: urlGetBase( url bad )', () => {
    expect(urlGetBase('example.com')).toBe('');
  });

  test('fn: urlGetBase( url )', () => {
    expect(urlGetBase('https://example.com?chacho&tio=1')).toBe('https://example.com');
  });
});
