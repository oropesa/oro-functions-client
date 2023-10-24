import { type } from './type';

export function isClass(value: any): boolean {
  return type(value) === 'class';
}
