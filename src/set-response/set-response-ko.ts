import { isBoolean, isObject } from '../general';
import { cloneObject, objIsNotEmpty } from '../objects';

//

export interface SResponseKOBasic {
  status: false;
}

export interface SResponseKOBasicAgain {
  status: false;
  tryAgain: true;
}

export interface SResponseKOSimple {
  status: false;
  error: { msg: string };
}

export interface SResponseKOSimpleAgain {
  status: false;
  error: { msg: string };
  tryAgain: true;
}

export interface SResponseKOObject<T extends Record<string, any> = {}> {
  status: false;
  error: T;
}

export interface SResponseKOObjectAgain<T extends Record<string, any> = {}> {
  status: false;
  error: T;
  tryAgain: true;
}

export interface SResponseKOObjectSimple<T extends Record<string, any> = {}> {
  status: false;
  error: T & { msg: string };
}

export interface SResponseKOObjectSimpleAgain<T extends Record<string, any> = {}> {
  status: false;
  error: T & { msg: string };
  tryAgain: true;
}

//

export type SResponseErrorBasic = Error & {
  responseError: SResponseKOBasic;
};

export type SResponseErrorBasicAgain = Error & {
  responseError: SResponseKOBasicAgain;
};

export type SResponseErrorSimple = Error & {
  responseError: SResponseKOSimple;
};

export type SResponseErrorSimpleAgain = Error & {
  responseError: SResponseKOSimpleAgain;
};

export type SResponseErrorObject<T extends Record<string, any> = {}> = Error & {
  responseError: SResponseKOObject<T>;
};

export type SResponseErrorObjectAgain<T extends Record<string, any> = {}> = Error & {
  responseError: SResponseKOObjectAgain<T>;
};

export type SResponseErrorObjectSimple<T extends Record<string, any> = {}> = Error & {
  responseError: SResponseKOObjectSimple<T>;
};

export type SResponseErrorObjectSimpleAgain<T extends Record<string, any> = {}> = Error & {
  responseError: SResponseKOObjectSimpleAgain<T>;
};

//

export interface SResponseKO<T extends Record<string, any> = {}> {
  status: false;
  error?: { msg?: string } & T;
  tryAgain?: boolean;
}

export type SResponseError<T extends Record<string, any> = {}> = Error & {
  responseError: SResponseKO<T>;
};

//

export function setResponseKO(): SResponseKOBasic;
export function setResponseKO(
  msg: undefined,
  error: undefined,
  tryAgain: undefined,
  asError: false,
): SResponseKOBasic;
export function setResponseKO(
  msg: undefined,
  error: undefined,
  tryAgain: boolean,
  asError?: false,
): SResponseKOBasicAgain;
export function setResponseKO(msg: string): SResponseKOSimple;
export function setResponseKO(
  msg: string,
  error: undefined,
  tryAgain: undefined,
  asError: false,
): SResponseKOSimple;
export function setResponseKO(
  msg: string,
  error: undefined,
  tryAgain: boolean,
  asError?: false,
): SResponseKOSimpleAgain;
export function setResponseKO<T extends Record<string, any>>(
  msg: undefined,
  error: T,
): SResponseKOObject<T>;
export function setResponseKO<T extends Record<string, any>>(
  error: T,
  err: undefined,
  tryAgain: undefined,
  asError: false,
): SResponseKOObject<T>;
export function setResponseKO<T extends Record<string, any>>(
  msg: undefined,
  error: T,
  tryAgain: undefined,
  asError: false,
): SResponseKOObject<T>;
export function setResponseKO<T extends Record<string, any>>(
  error: T,
  err?: T,
  tryAgain?: undefined,
  asError?: false,
): SResponseKOObject<T>;
export function setResponseKO<T extends Record<string, any>>(
  msg: undefined,
  error: T,
  tryAgain: boolean,
  asError?: false,
): SResponseKOObjectAgain<T>;
export function setResponseKO<T extends Record<string, any>>(
  error: T,
  err: undefined | T,
  tryAgain: boolean,
  asError?: false,
): SResponseKOObjectAgain<T>;
export function setResponseKO<T extends Record<string, any>>(
  msg: string,
  error: T,
): SResponseKOObjectSimple<T>;
export function setResponseKO<T extends Record<string, any>>(
  msg: string,
  error: T,
  tryAgain: undefined,
  asError: false,
): SResponseKOObjectSimple<T>;
export function setResponseKO<T extends Record<string, any>>(
  msg: string,
  error: T,
  tryAgain: boolean,
  asError?: false,
): SResponseKOObjectSimpleAgain<T>;

//

export function setResponseKO(
  msg: undefined,
  error: undefined,
  tryAgain: undefined,
  asError: true,
): SResponseErrorBasic;
export function setResponseKO(
  msg: undefined,
  error: undefined,
  tryAgain: boolean,
  asError: true,
): SResponseErrorBasicAgain;
export function setResponseKO(
  msg: string,
  error: undefined,
  tryAgain: undefined,
  asError: true,
): SResponseErrorSimple;
export function setResponseKO(
  msg: string,
  error: undefined,
  tryAgain: boolean,
  asError: true,
): SResponseErrorSimpleAgain;
export function setResponseKO<T extends Record<string, any>>(
  error: T,
  err: undefined | T,
  tryAgain: undefined,
  asError: true,
): SResponseErrorObject<T>;
export function setResponseKO<T extends Record<string, any>>(
  msg: undefined,
  error: T,
  tryAgain: undefined,
  asError: true,
): SResponseErrorObject<T>;
export function setResponseKO<T extends Record<string, any>>(
  msg: undefined,
  error: T,
  tryAgain: boolean,
  asError: true,
): SResponseErrorObjectAgain<T>;
export function setResponseKO<T extends Record<string, any>>(
  error: T,
  err: undefined | T,
  tryAgain: boolean,
  asError: true,
): SResponseErrorObjectAgain<T>;
export function setResponseKO<T extends Record<string, any>>(
  msg: string,
  error: T,
  tryAgain: undefined,
  asError: true,
): SResponseErrorObjectSimple<T>;
export function setResponseKO<T extends Record<string, any>>(
  msg: string,
  error: T,
  tryAgain: boolean,
  asError: true,
): SResponseErrorObjectSimpleAgain<T>;

//

export function setResponseKO<T extends Record<string, any>>(
  msgOrError?: string | T,
  error?: T,
  tryAgain?: boolean,
  asError?: boolean,
): SResponseKO<T> | SResponseError<T> {
  let errorObj = cloneObject(error);
  let msg = 'msg' in errorObj ? String(errorObj.msg) : '';

  let hasTryAgain = tryAgain;
  let isAsError = !!asError;

  if ('tryAgain' in errorObj) {
    hasTryAgain = errorObj.tryAgain;
    delete errorObj.tryAgain;
  }

  if ('asError' in errorObj) {
    isAsError = !!errorObj.asError;
    delete errorObj.asError;
  }

  isObject(msgOrError)
    ? objIsNotEmpty(msgOrError) && (errorObj = { ...msgOrError, ...errorObj })
    : msgOrError && (msg = msg ? `${msgOrError} ${msg}` : msgOrError);

  msg && ((errorObj as SResponseKOObjectSimple<T>['error']).msg = msg);

  const response: SResponseKO<T> = { status: false };
  objIsNotEmpty(errorObj) && (response.error = errorObj);
  isBoolean(hasTryAgain) && (response.tryAgain = hasTryAgain);

  if (!isAsError) {
    return response;
  }

  const responseError = new Error('error');
  responseError.name =
    response.error && 'errorName' in response.error
      ? String(response.error.errorName)
      : 'responseError';
  response.error && response.error.msg && (responseError.message = response.error.msg);
  (responseError as SResponseError<T>).responseError = response;
  responseError.stack = responseError.stack?.replace(
    responseError.message,
    JSON.stringify(response),
  );

  return responseError as SResponseError<T>;
}
