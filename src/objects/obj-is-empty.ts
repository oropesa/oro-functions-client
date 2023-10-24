import { type } from '../general';

export function objIsNotEmpty(obj: any): obj is NonNullable<Record<string | number, any>> {
  return ['object', 'array'].includes(type(obj)) && Object.keys(obj).length > 0;
}

export function objIsEmpty(obj: any): boolean {
  return !objIsNotEmpty(obj);
}
