import { isObject } from '../general';
import { cloneObject, objIsNotEmpty } from '../objects';

//

export interface SResponseOKBasic {
  status: true;
}

export interface SResponseOKSimple {
  status: true;
  msg: string;
}

export type SResponseOKObject<T extends Record<string, any> = {}> = T & {
  status: true;
};

export type SResponseOKObjectSimple<T extends Record<string, any> = {}> = T & {
  status: true;
  msg: string;
};

//

export type SResponseOK<T extends Record<string, any> = {}> = { msg?: string } & T & {
    status: true;
  };

//

export function setResponseOK(): SResponseOKBasic;
export function setResponseOK(str: string): SResponseOKSimple;
export function setResponseOK<T extends Record<string, any>>(
  object: T,
  obj?: T,
): SResponseOKObject<T>;
export function setResponseOK<T extends Record<string, any>>(
  str: undefined,
  object: T,
): SResponseOKObject<T>;
export function setResponseOK<T extends Record<string, any>>(
  str: string,
  object: T,
): SResponseOKObjectSimple<T>;

//

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
