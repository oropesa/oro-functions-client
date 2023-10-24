import { isString } from '../general';

export function urlObjByUrl(url: string): URL | undefined {
  if (!isString(url)) {
    return;
  }

  try {
    return new URL(url);
  } catch {
    return;
  }
}
