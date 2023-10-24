import { isString } from '../general';

export function urlEncode(url: string): string {
  if (!isString(url)) {
    return '';
  }

  // `encodeURIComponent` doesn't encode -_.!~*'()
  return encodeURIComponent(url)
    .replace(/!/g, '%21')
    .replace(/~/g, '%7E')
    .replace(/\*/g, '%2A')
    .replace(/'/g, '%27')
    .replace(/\(/g, '%28')
    .replace(/\)/g, '%29')
    .replace(/\+/g, '%20');
}
