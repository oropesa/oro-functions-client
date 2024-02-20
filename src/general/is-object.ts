import { type } from './type';

export function isObject(value: any): value is Record<string, any> {
  return type(value) === 'object';
}
