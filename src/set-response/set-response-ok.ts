import { isObject } from '../general';
import { cloneObject, objIsNotEmpty } from '../objects';

export type SResponseOK<T extends Record<string, any> = {}> = { msg?: string } & T & {
    status: true;
  };

export function setResponseOK<T extends Record<string, any>>(
  msgOrData?: string | T,
  data?: T,
): SResponseOK<T> {
  let cloneData = cloneObject(data);
  let msg = 'msg' in cloneData ? String(cloneData.msg) : '';

  isObject(msgOrData)
    ? objIsNotEmpty(msgOrData) && (cloneData = { ...msgOrData, ...cloneData })
    : msgOrData && (msg = msg ? `${msgOrData} ${msg}` : msgOrData);

  msg && ((cloneData as SResponseOK<T>).msg = msg);
  'status' in cloneData && ((cloneData as SResponseOK<T>).status = true);

  return { status: true, ...cloneData };
}
