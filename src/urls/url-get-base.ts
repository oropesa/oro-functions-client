import { urlObjByUrl } from './url-obj-by-url';

export function urlGetBase(url: string): string {
  let urlObj = urlObjByUrl(url);
  if (urlObj === undefined) {
    return '';
  }

  return urlObj.origin;
}
