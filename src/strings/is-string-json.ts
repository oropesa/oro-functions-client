import { isString, type } from '../general';

export function isStringJson(str: string, allowArray = false) {
  if (!isString(str)) {
    return false;
  }

  let strJson;
  try {
    strJson = JSON.parse(str);
  } catch {
    return false;
  }

  const jsonType = type(strJson);
  if (allowArray && jsonType === 'array') {
    return true;
  }

  return jsonType === 'object';
}
