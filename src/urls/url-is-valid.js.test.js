import { urlIsValid } from './url-is-valid';

describe('fn: urlIsValid', () => {
  test('fn: urlIsValid( undefined )', () => {
    expect(urlIsValid()).toBe(false);
  });
});
