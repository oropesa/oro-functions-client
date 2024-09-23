import { isBoolean, isObject, isUndefined } from '../general';
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

export interface SResponseKOObject<T extends Record<string, any> = NonNullable<Record<string, any>>> {
  status: false;
  error: Omit<T, 'asError'>;
}

export interface SResponseKOObjectAgain<T extends Record<string, any> = NonNullable<Record<string, any>>> {
  status: false;
  error: Omit<T, 'tryAgain' | 'asError'>;
  tryAgain: true;
}

export interface SResponseKOObjectSimple<T extends Record<string, any> = NonNullable<Record<string, any>>> {
  status: false;
  error: { msg: string } & Omit<T, 'msg' | 'asError'>;
}

export interface SResponseKOObjectSimpleAgain<T extends Record<string, any> = NonNullable<Record<string, any>>> {
  status: false;
  error: { msg: string } & Omit<T, 'msg' | 'tryAgain' | 'asError'>;
  tryAgain: true;
}

type ObjectWithTryAgain = { tryAgain: any } & Record<string, any>;
type ObjectWithAsError = { asError: true } & Record<string, any>;
type ObjectWithTryAgainAsError = { tryAgain: any; asError: true } & Record<string, any>;

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

export type SResponseErrorObject<T extends Record<string, any> = NonNullable<Record<string, any>>> = Error & {
  responseError: SResponseKOObject<T>;
};

export type SResponseErrorObjectAgain<T extends Record<string, any> = NonNullable<Record<string, any>>> = Error & {
  responseError: SResponseKOObjectAgain<T>;
};

export type SResponseErrorObjectSimple<T extends Record<string, any> = NonNullable<Record<string, any>>> = Error & {
  responseError: SResponseKOObjectSimple<T>;
};

export type SResponseErrorObjectSimpleAgain<T extends Record<string, any> = NonNullable<Record<string, any>>> =
  Error & { responseError: SResponseKOObjectSimpleAgain<T> };

//

export interface SResponseKO<T extends Record<string, any> = NonNullable<Record<string, any>>> {
  status: false;
  error?: { msg?: string } & T;
  tryAgain?: boolean;
}

export type SResponseError<T extends Record<string, any> = NonNullable<Record<string, any>>> = Error & {
  responseError: SResponseKO<T>;
};

//

export function setResponseKO(): SResponseKOBasic;
export function setResponseKO(msg: undefined, error: undefined, tryAgain: undefined, asError: false): SResponseKOBasic;
export function setResponseKO(
  msg: undefined,
  error: undefined,
  tryAgain: boolean,
  asError?: false,
): SResponseKOBasicAgain;
export function setResponseKO(msg: string): SResponseKOSimple;
export function setResponseKO(msg: string, error: undefined, tryAgain: undefined, asError: false): SResponseKOSimple;
export function setResponseKO(
  msg: string,
  error: undefined,
  tryAgain: boolean,
  asError?: false,
): SResponseKOSimpleAgain;
export function setResponseKO<T extends ObjectWithTryAgainAsError>(
  msg: undefined,
  error: T,
): SResponseErrorObjectAgain<T>;
export function setResponseKO<T extends ObjectWithTryAgain>(msg: undefined, error: T): SResponseKOObjectAgain<T>;
export function setResponseKO<T extends ObjectWithAsError>(msg: undefined, error: T): SResponseErrorObject<T>;
export function setResponseKO<T extends Record<string, any>>(msg: undefined, error: T): SResponseKOObject<T>;
export function setResponseKO<T extends Record<string, any>>(
  error: T,
  err: undefined,
  tryAgain: undefined,
  asError: false,
): SResponseKOObject<T>;
export function setResponseKO<T extends ObjectWithTryAgainAsError>(
  error: T,
  err: undefined,
  tryAgain: undefined,
  asError: false,
): SResponseErrorObjectAgain<T>;
export function setResponseKO<T extends ObjectWithTryAgain>(
  error: T,
  err: undefined,
  tryAgain: undefined,
  asError: false,
): SResponseKOObjectAgain<T>;
export function setResponseKO<T extends ObjectWithAsError>(
  error: T,
  err: undefined,
  tryAgain: undefined,
  asError: false,
): SResponseErrorObject<T>;
export function setResponseKO<T extends Record<string, any>>(
  msg: undefined,
  error: T,
  tryAgain: undefined,
  asError: false,
): SResponseKOObject<T>;
export function setResponseKO<T extends ObjectWithTryAgainAsError>(
  error: T,
  err?: T,
  tryAgain?: undefined,
  asError?: false,
): SResponseErrorObjectAgain<T>;
export function setResponseKO<T extends ObjectWithTryAgain>(
  error: T,
  err?: T,
  tryAgain?: undefined,
  asError?: false,
): SResponseKOObjectAgain<T>;
export function setResponseKO<T extends ObjectWithAsError>(
  error: T,
  err?: T,
  tryAgain?: undefined,
  asError?: false,
): SResponseErrorObject<T>;
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

export function setResponseKO<T extends ObjectWithTryAgainAsError>(
  msg: string,
  error: T,
): SResponseErrorObjectSimpleAgain<T>;
export function setResponseKO<T extends ObjectWithTryAgain>(msg: string, error: T): SResponseKOObjectSimpleAgain<T>;
export function setResponseKO<T extends ObjectWithAsError>(msg: string, error: T): SResponseErrorObjectSimple<T>;
export function setResponseKO<T extends Record<string, any>>(msg: string, error: T): SResponseKOObjectSimple<T>;
export function setResponseKO<T extends ObjectWithTryAgainAsError>(
  msg: string,
  error: T,
  tryAgain: undefined,
  asError: false,
): SResponseErrorObjectSimpleAgain<T>;
export function setResponseKO<T extends ObjectWithTryAgain>(
  msg: string,
  error: T,
  tryAgain: undefined,
  asError: false,
): SResponseKOObjectSimpleAgain<T>;
export function setResponseKO<T extends ObjectWithAsError>(
  msg: string,
  error: T,
  tryAgain: undefined,
  asError: false,
): SResponseErrorObjectSimple<T>;
export function setResponseKO<T extends Record<string, any>>(
  msg: string,
  error: T,
  tryAgain: undefined,
  asError: false,
): SResponseKOObjectSimple<T>;
export function setResponseKO<T extends ObjectWithAsError>(
  msg: string,
  error: T,
  tryAgain: boolean,
  asError?: false,
): SResponseErrorObjectSimpleAgain<T>;
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
export function setResponseKO(msg: string, error: undefined, tryAgain: undefined, asError: true): SResponseErrorSimple;
export function setResponseKO(
  msg: string,
  error: undefined,
  tryAgain: boolean,
  asError: true,
): SResponseErrorSimpleAgain;
export function setResponseKO<T extends ObjectWithTryAgain>(
  error: T,
  err: undefined | T,
  tryAgain: undefined,
  asError: true,
): SResponseErrorObjectAgain<T>;
export function setResponseKO<T extends Record<string, any>>(
  error: T,
  err: undefined | T,
  tryAgain: undefined,
  asError: true,
): SResponseErrorObject<T>;
export function setResponseKO<T extends ObjectWithTryAgain>(
  msg: undefined,
  error: T,
  tryAgain: undefined,
  asError: true,
): SResponseErrorObjectAgain<T>;
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
export function setResponseKO<T extends ObjectWithTryAgain>(
  msg: string,
  error: T,
  tryAgain: undefined,
  asError: true,
): SResponseErrorObjectSimpleAgain<T>;
export function setResponseKO<T extends ObjectWithAsError>(
  msg: string,
  error: T,
  tryAgain: undefined,
  asError: true,
): SResponseErrorObjectSimple<T>;
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
): SResponseErrorObjectSimpleAgain;

//

// NOTE complexity 24 (limit 20)
export function setResponseKO<T extends Record<string, any>>(
  msgOrError?: string | T,
  error?: T,
  tryAgain?: boolean,
  asError?: boolean,
): SResponseKO<T> | SResponseError<T> {
  let errorObj = cloneObject(error);
  let msg = 'msg' in errorObj && !isUndefined(errorObj.msg) ? String(errorObj.msg) : '';

  let hasTryAgain = tryAgain;
  let isAsError = !!asError;

  if (isObject(msgOrError) && 'tryAgain' in msgOrError) {
    hasTryAgain = msgOrError.tryAgain;
    delete msgOrError.tryAgain;
  }

  if ('tryAgain' in errorObj) {
    hasTryAgain = errorObj.tryAgain;
    delete errorObj.tryAgain;
  }

  if (isObject(msgOrError) && 'asError' in msgOrError) {
    if (msgOrError.asError === true) {
      isAsError = msgOrError.asError;
    }
    delete msgOrError.asError;
  }

  if ('asError' in errorObj) {
    if (errorObj.asError === true) {
      isAsError = errorObj.asError;
    }
    delete errorObj.asError;
  }

  if (isObject(msgOrError)) {
    if ('msg' in msgOrError && !isUndefined(msgOrError.msg)) {
      msg = msg ? `${msgOrError.msg} ${msg}` : String(msgOrError.msg);
    }

    errorObj = { ...msgOrError, ...errorObj };
  } else if (!isUndefined(msgOrError)) {
    msg = msg ? `${String(msgOrError)} ${msg}` : String(msgOrError);
  }

  delete errorObj.msg;
  if (msg) {
    errorObj = { msg, ...errorObj };
  }

  const response: SResponseKO<T> = { status: false };
  if (objIsNotEmpty(errorObj)) {
    response.error = errorObj;
  }
  if (isBoolean(hasTryAgain)) {
    response.tryAgain = hasTryAgain;
  }

  if (!isAsError) {
    return response;
  }

  const responseError = new Error('error');
  responseError.name =
    response.error && 'errorName' in response.error ? String(response.error.errorName) : 'responseError';
  if (response.error && response.error.msg) {
    responseError.message = response.error.msg;
  }
  (responseError as SResponseError<T>).responseError = response;
  responseError.stack = responseError.stack?.replace(responseError.message, JSON.stringify(response));

  return responseError as SResponseError<T>;
}
