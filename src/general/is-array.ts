import { type } from './type';

export function isArray(value: any): value is Array<any> {
  return type(value) === 'array';
}
