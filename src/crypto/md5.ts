import { isNully } from '../general';
import { md5 as MD5 } from 'oro-php-locutus';

export function md5(str: string): string {
  return isNully(str) ? '' : MD5(str);
}
