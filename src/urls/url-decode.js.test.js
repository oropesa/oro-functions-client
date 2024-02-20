import { urlDecode } from './url-decode';

describe('fn: urlDecode', () => {
  test('fn: urlDecode( undefined )', () => {
    expect(urlDecode()).toBe('');
  });
});
