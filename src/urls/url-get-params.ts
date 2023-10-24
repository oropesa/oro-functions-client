import { isString } from '../general';
import { urlObjByUrl } from './url-obj-by-url';

export function urlGetParams(urlOrQuery: string): Record<string, string | string[]> {
  if (!isString(urlOrQuery)) {
    return {};
  }

  let urlObj = urlObjByUrl(urlOrQuery);
  if (!urlObj && urlOrQuery.includes('?')) {
    return {};
  }

  const searchParams = urlObj ? urlObj.searchParams : new URLSearchParams(urlOrQuery);
  const params: Record<string, string | string[]> = {};

  for (const [key, value] of searchParams) {
    params[key] =
      params[key] === undefined
        ? value
        : [...(Array.isArray(params[key]) ? params[key] : [String(params[key])]), ...value];
  }

  return params;
}
