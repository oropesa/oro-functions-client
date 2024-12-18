import { isNumber, isString } from '../general';

export function snakeify(str: string): string {
  const string = isNumber(str) ? String(str) : str;

  if (!isString(string) || string.length === 0) {
    return '';
  }

  return (string.match(/[A-Z]{2,}(?=[A-Z][a-z]+\d*|\b)|[A-Z]?[a-z]+\d*|[A-Z]|\d+/g) ?? [])
    .map((x) => x.toLowerCase())
    .join('_');
}
