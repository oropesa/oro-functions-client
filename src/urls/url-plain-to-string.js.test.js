import { urlPlainToString } from './url-plain-to-string';

describe('fn: urlPlainToString', () => {
  test('fn: urlPlainToString( undefined )', () => {
    expect(urlPlainToString()).toBe('');
  });
});
