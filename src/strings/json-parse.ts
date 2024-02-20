import { isObject } from '../general';
import { isNumeric } from '../numbers';
import { arrayize } from './arrayize';
import { jsonize } from './jsonize';

export function jsonParse<T>(str: string, strict?: false): T | string;
export function jsonParse<T>(str: string, strict: true): T | null;
export function jsonParse<T>(str: string, strict?: boolean): T | null | string {
  const strJson = strict ? jsonize<T>(str, strict) : jsonize<T>(str, strict);

  if (!isObject(strJson)) {
    return strJson;
  }

  const isJsonArray = !strict && Object.keys(strJson).some((element) => isNumeric(element) && Number(element) < 5);

  return isJsonArray ? (arrayize(strJson) as T) : strJson;
}
