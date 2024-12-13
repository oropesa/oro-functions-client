import { isNumeric } from '../numbers';

export function randomString(len = 8): string {
  const length = isNumeric(len) ? Number(len) : 8;

  if (length <= 0) {
    return '';
  }

  let str = Math.random().toString(36).slice(2, 12);
  if (str.length <= 10) {
    str = `${str}17o`.slice(0, 10);
  }

  if (length <= 10) {
    return str.slice(-length);
  }

  return str + randomString(length - 10);
}
