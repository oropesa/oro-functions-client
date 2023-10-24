import { isObject } from '../general';
import { cloneObject, objIsNotEmpty } from '../objects';

export type SResponseKOError<T extends Record<string, any> = {}> = { msg?: string } & T;

export interface SResponseKO<T extends Record<string, any> = {}> {
  status: false;
  error?: SResponseKOError<T>;
  tryAgain?: boolean;
}

export type SResponseError<T extends Record<string, any> = {}> = Error & {
  responseError: SResponseKO<T>;
};

export function setResponseKO<T extends Record<string, any>, E extends boolean = false>(
  msgOrError?: string | T,
  error?: T,
  tryAgain = false,
  asError?: E,
): E extends true ? SResponseError<T> : SResponseKO<T> {
  let errorObj = cloneObject(error);
  let msg = 'msg' in errorObj ? String(errorObj.msg) : '';

  let hasTryAgain = tryAgain;
  let isAsError = !!asError as E;

  if ('tryAgain' in errorObj) {
    hasTryAgain = !!errorObj.tryAgain;
    delete errorObj.tryAgain;
  }

  if ('asError' in errorObj) {
    isAsError = !!errorObj.asError as E;
    delete errorObj.asError;
  }

  isObject(msgOrError)
    ? objIsNotEmpty(msgOrError) && (errorObj = { ...msgOrError, ...errorObj })
    : msgOrError && (msg = msg ? `${msgOrError} ${msg}` : msgOrError);

  msg && ((errorObj as SResponseKOError<T>).msg = msg);

  const response: SResponseKO<T> = { status: false };
  objIsNotEmpty(errorObj) && (response.error = errorObj);
  hasTryAgain && (response.tryAgain = hasTryAgain);

  if (!isAsError) {
    return response as E extends true ? SResponseError<T> : SResponseKO<T>;
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

  return responseError as E extends true ? SResponseError<T> : SResponseKO<T>;
}
