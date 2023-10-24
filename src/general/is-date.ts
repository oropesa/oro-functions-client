import { type } from './type';

export function isDate(value: any): value is Date {
  return type(value) === 'date';
}
