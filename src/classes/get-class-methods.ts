import { isClass } from '../general';

export function getClassMethods(classy: any): string[] {
  if (!isClass(classy)) {
    return [];
  }
  return Object.getOwnPropertyNames(classy.prototype).filter((prop) => prop !== 'constructor');
}
