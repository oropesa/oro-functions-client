import { isObject, isUndefined } from '../general';
import { cloneObject } from '../objects';

//

export interface SResponseOKBasic {
  status: true;
}

export interface SResponseOKSimple {
  status: true;
  msg: string;
}

export type SResponseOKObject<T extends Record<string, any> = NonNullable<Record<string, any>>> = {
  status: true;
} & Omit<T, 'status'>;

export type SResponseOKObjectSimple<T extends Record<string, any> = NonNullable<Record<string, any>>> = {
  status: true;
  msg: string;
} & Omit<T, 'status' | 'msg'>;

//

export type SResponseOK<T extends Record<string, any> = NonNullable<Record<string, any>>> = {
  status: true;
  msg?: string;
} & Omit<T, 'status' | 'msg'>;

//

type ObjectWithMsg = { msg: any } & NonNullable<Record<string, any>>;
type ObjectWithoutMsg = NonNullable<Omit<Record<string, any>, 'msg'>>;

export function setResponseOK(): SResponseOKBasic;
export function setResponseOK(str: string): SResponseOKSimple;
export function setResponseOK<T extends ObjectWithMsg>(object: T, obj?: T): SResponseOKObjectSimple<T>;
export function setResponseOK<T extends ObjectWithoutMsg>(object: T, obj?: T): SResponseOKObject<T>;
export function setResponseOK<T extends ObjectWithMsg>(str: undefined, object: T): SResponseOKObjectSimple<T>;
export function setResponseOK<T extends ObjectWithoutMsg>(str?: undefined, obj?: T): SResponseOKObject<T>;
// eslint-disable-next-line @typescript-eslint/unified-signatures
export function setResponseOK<T extends Record<string, any>>(str: string, object: T): SResponseOKObjectSimple<T>;
//

export function setResponseOK<T extends Record<string, any>>(msgOrData?: string | T, data?: T): SResponseOK<T> {
  let cloneData = cloneObject(data);
  let msg = 'msg' in cloneData && !isUndefined(cloneData.msg) ? String(cloneData.msg) : '';

  if (isObject(msgOrData)) {
    if ('msg' in msgOrData && !isUndefined(msgOrData.msg)) {
      msg = msg ? `${msgOrData.msg} ${msg}` : String(msgOrData.msg);
    }

    cloneData = { ...msgOrData, ...cloneData };
  } else if (!isUndefined(msgOrData)) {
    msg = msg ? `${String(msgOrData)} ${msg}` : String(msgOrData);
  }

  'status' in cloneData && ((cloneData as SResponseOKObject).status = true);

  delete cloneData.msg;
  msg && (cloneData = { msg, ...cloneData });

  return { status: true, ...cloneData };
}
