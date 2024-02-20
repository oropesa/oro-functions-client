import { type } from '../general';
import { urlObjByUrl } from './url-obj-by-url';

describe('fn: urlObjByUrl', () => {
  test('fn: urlObjByUrl( url bad )', () => {
    expect(urlObjByUrl('example.com')).toBe(undefined);
  });

  test('fn: urlObjByUrl( url )', () => {
    expect(type(urlObjByUrl('https://example.com?chacho&tio=1'))).toBe('url');
  });
});
