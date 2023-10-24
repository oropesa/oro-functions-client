import { jsonize } from './jsonize';
import { arrayize } from './arrayize';
import { isObject } from '../general';
import { isNumeric } from '../numbers';

export function jsonParse<T, B extends boolean = boolean>(
  str: string,
  strict?: B,
): B extends true ? T | null : T | string {
  let strJson = jsonize<T, B>(str, strict);

  if (!isObject(strJson)) {
    return strJson as B extends true ? null : string;
  }

  let isJsonArray =
    !strict && Object.keys(strJson).some((element) => isNumeric(element) && Number(element) < 5);

  return (isJsonArray ? arrayize<T, B>(strJson) : strJson) as T;
}
