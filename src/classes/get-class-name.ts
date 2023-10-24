import { isClass } from '../general';

export function getClassName(classy: any): string {
  if (!isClass(classy)) {
    return '';
  }

  return classy.name;
}
