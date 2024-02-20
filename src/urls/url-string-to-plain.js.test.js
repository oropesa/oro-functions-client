import { urlStringToPlain } from './url-string-to-plain';

describe('fn: urlStringToPlain', () => {
  test('fn: urlStringToPlain( undefined )', () => {
    expect(urlStringToPlain()).toBe('');
  });
});
