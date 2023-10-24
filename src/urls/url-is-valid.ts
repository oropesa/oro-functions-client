import { isString } from '../general';

export function urlIsValid(url: string): boolean {
  if (!isString(url)) {
    return false;
  }

  try {
    return !!new URL(url);
  } catch {
    return false;
  }
}
