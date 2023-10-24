import { type } from './type';

export function isObject(value: any): value is { [key in string]: any } {
  return type(value) === 'object';
}
