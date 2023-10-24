import { isString } from '../general';

export function urlPlainToString(str: string): string {
  if (!isString(str)) {
    return '';
  }

  return str.replace(/%3d/g, '=').replace(/%20/g, ' ');
}
