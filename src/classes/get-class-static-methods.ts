import { isClass } from '../general';

export function getClassStaticMethods(classy: any): string[] {
  if (!isClass(classy)) {
    return [];
  }

  return Object.getOwnPropertyNames(classy).filter((prop) => typeof classy[prop] === 'function');
}
