import { type } from './type';

export function isRegexp(value: any): value is RegExp {
  return type(value) === 'regexp';
}
