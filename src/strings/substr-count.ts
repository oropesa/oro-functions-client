import { isNumber, isString } from '../general';

export function substrCount(str: string, substr: string): number {
  const string = isNumber(str) ? String(str) : str;
  const substring = isNumber(substr) ? String(substr) : substr;

  if (!isString(string) || !isString(substring) || !string || !substring) {
    return 0;
  }

  const regex = new RegExp(substring, 'g');
  return (string.match(regex) ?? []).length;
}
