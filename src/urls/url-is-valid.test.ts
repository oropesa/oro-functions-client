import { isValidUrl, urlIsValid } from './url-is-valid';

describe('fn: urlIsValid', () => {
  test('fn: urlIsValid( url bad )', () => {
    expect(urlIsValid('example.com')).toBe(false);
  });

  test('fn: urlIsValid( url )', () => {
    expect(urlIsValid('https://example.com?chacho&tio=1')).toBe(true);
  });
});

describe('fn: isValidUrl', () => {
  test('fn: isValidUrl( url bad )', () => {
    expect(isValidUrl('example.com')).toBe(false);
  });

  test('fn: isValidUrl( url )', () => {
    expect(isValidUrl('https://example.com?chacho&tio=1')).toBe(true);
  });
});
