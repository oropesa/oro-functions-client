import { isNumeric } from '../numbers';

export function randomString(len = 8): string {
  let length = len;
  !isNumeric(length) && (length = 8);
  length = Number(length);

  if (length <= 0) {
    return '';
  }

  let str = Math.random().toString(36).slice(2, 12);
  str.length < 10 && (str = `${str}17o`.slice(0, 10));
  if (len <= 10) {
    return str.slice(-length);
  }

  return str + randomString(length - 10);
}
