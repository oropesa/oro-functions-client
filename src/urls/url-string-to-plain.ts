import { isString } from '../general';

export function urlStringToPlain(str: string): string {
  if (!isString(str)) {
    return '';
  }

  return str.replace(/=/g, '%3d').replace(/ /g, '%20');
}
