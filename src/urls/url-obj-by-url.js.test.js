import { urlObjByUrl } from './url-obj-by-url';

describe('fn: urlObjByUrl', () => {
  test('fn: urlObjByUrl( undefined )', () => {
    expect(urlObjByUrl()).toBe(undefined);
  });
});
