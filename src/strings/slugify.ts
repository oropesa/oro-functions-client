import { isNumber, isString } from '../general';

export function slugify(str: string): string {
  let string = str;
  isNumber(string) && (string = String(string));

  if (!isString(string)) {
    return '';
  }

  return (string.match(/[A-Z]{2,}(?=[A-Z][a-z]+\d*|\b)|[A-Z]?[a-z]+\d*|[A-Z]|\d+/g) ?? [])
    .map((x) => x.toLowerCase())
    .join('-');
}
