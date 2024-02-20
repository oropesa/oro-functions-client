import { urlEncode } from './url-encode';

describe('fn: urlEncode', () => {
  test('fn: urlEncode( undefined )', () => {
    expect(urlEncode()).toBe('');
  });
});
