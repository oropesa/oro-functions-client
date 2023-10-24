import type { SResponseOK } from './set-response-ok';
import type { SResponseKO, SResponseError } from './set-response-ko';

export { setResponseOK } from './set-response-ok';
export { setResponseKO } from './set-response-ko';
export type { SResponseOK } from './set-response-ok';
export type { SResponseKO, SResponseError, SResponseKOError } from './set-response-ko';

export type SResponse<
  OK extends Record<string, any> = {},
  KO extends Record<string, any> = {},
  E extends boolean = false,
> = E extends true ? SResponseOK<OK> | SResponseError<KO> : SResponseOK<OK> | SResponseKO<KO>;
