import { isString } from '../general';

export function urlDecode(url: string): string {
  if (!isString(url)) {
    return '';
  }

  // `encodeURIComponent` doesn't encode -_.!~*'()
  return decodeURIComponent(url)
    .replace(/%21/g, '!')
    .replace(/%7E/g, '~')
    .replace(/%2A/g, '*')
    .replace(/%27/g, "'")
    .replace(/%28/g, '(')
    .replace(/%29/g, ')')
    .replace(/%20/g, '+');
}
