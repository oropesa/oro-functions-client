import { isArray, isString } from '../general';
import { urlObjByUrl } from './url-obj-by-url';

export function urlGetParams(urlOrQuery: string): Record<string, string | string[]> {
  if (!isString(urlOrQuery)) {
    return {};
  }

  const urlObj = urlObjByUrl(urlOrQuery);
  if (!urlObj && urlOrQuery.includes('?')) {
    return {};
  }

  const searchParams = urlObj ? urlObj.searchParams : new URLSearchParams(urlOrQuery);
  const params: Record<string, string | string[]> = {};

  for (const [stringKey, value] of searchParams) {
    const isArrayKey = stringKey.slice(-2) === '[]';
    const key = isArrayKey ? stringKey.slice(0, -2) : stringKey;

    params[key] =
      params[key] === undefined
        ? isArrayKey
          ? [value]
          : value
        : [...(isArray(params[key]) ? [...params[key], value] : [String(params[key]), value])];
  }

  return params;
}
